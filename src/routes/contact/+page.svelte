<script>
    import { config } from "$lib/config";
    const {web3FormsKey} = config
    let status = ""
    let name = "";
    let email = "";
    let message = "";
    const handleSubmit = async data => {
      status = 'Submitting...'
      const formData = new FormData(data.currentTarget)
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: json
      });
      const result = await response.json();
        if (result.success) {
            console.log(result);
            //status = result.message || "Success"
            status = 'Заебца, получилса'

            name = "";
            email = "";
            message = "";
            // Исчезновение сообщения через 3 секунды
            setTimeout(() => {
                status = "";
            }, 3000);
        } else {
            console.log(result);
            status = 'Случилась неприятность'
        }
    }
    </script>

    <form on:submit|preventDefault={handleSubmit}>
        <input type="hidden" name="subject" value="Новое письмо с сайта koltan.dev">
        <input type="hidden" name="from_name" value="koltan.dev">
        <input type="hidden" name="access_key" value={web3FormsKey}>
        <input type="text" name="name" required bind:value={name}/>
        <input type="email" name="email" required bind:value={email}/>
        <textarea name="message" required rows="3" bind:value={message}></textarea>
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <input type="submit" />
    </form>

    <div>{status}</div>
