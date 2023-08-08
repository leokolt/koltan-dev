export const prerender = false;


import { fail } from "@sveltejs/kit";
import { object, string, InferType } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const contactFormSchema = object({
      name: string().min(2, "too short").required("We only accept named users"),
      email: string().required().email(),
      message: string().required(),
    });

    try {
      await contactFormSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      const formEndpoint = "https://docs.google.com/forms/d/e/1FAIpQLSdw1u6-zIePNSYsTeiGPU-DhL_6Dt0KSS0meYDOFKAwVqXChg/formResponse";

      const payload = new URLSearchParams();
      payload.append("entry.2005620554", name);
      payload.append("entry.982414856", email);
      payload.append("entry.839337160", message);

      const requestOptions = {
        method: "POST",
        body: payload,
      };

      const response = await fetch(formEndpoint, requestOptions);

      if (response.ok) {
        return {
          success: true,
          status: "Form is submitted",
        };
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);

      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message,
      };
    }
  },
};
