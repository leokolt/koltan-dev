<script>

    let status = ""
    let name = "";
    let email = "";
    let message = "";

    let stateForm = ''

    const handleSubmit = async data => {
      status = 'Отправляем...'
      const formData = new FormData(data.currentTarget)
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      stateForm = 'process'

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
            status = 'Готово. Я свяжусь с вами, в ближайшее время'
            stateForm = 'success'
            name = "";
            email = "";
            message = "";
            // Исчезновение сообщения через 3 секунды
            setTimeout(() => {
                status = "";
                stateForm = ''
            }, 3000);
        } else {
            console.log(result);
            stateForm = 'fail'
            status = 'Случилась неприятность. Попробуйте написать снова или свяжитесь со мной другим способом'
            setTimeout(() => {
                status = "";
                stateForm = ''
            }, 3000);
        }
    }
    </script>



    <form on:submit|preventDefault={handleSubmit} class:form-process={stateForm === 'process'} class:form-success={stateForm === 'success'} class:form-fail={stateForm === 'fail'}>
        <input type="hidden" name="subject" value="Новое письмо с сайта koltan.dev">
        <input type="hidden" name="from_name" value="koltan.dev">
        <input type="hidden" name="access_key" value="3eaa5353-83d7-492c-8771-8f636e5bf2db">
        <input type="text" name="name" required bind:value={name} placeholder="Ваше имя"/>
        <input type="email" name="email" required bind:value={email} placeholder="Ваше Email"/>
        <textarea name="message" required rows="3" bind:value={message} placeholder="Ваше сообщение"></textarea>
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <input type="submit" class="btn"/>
        {#if status}
        <div class="form-status">{status}</div>
        {/if}
    </form>




<style>
    form {
        position: relative;
        z-index: 1;
        padding: var(--unit-2);
    }
    .form-process:before, .form-success:before, .form-fail:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(3px);
        z-index: 2;
    }
    .form-status {
        position: absolute;
        z-index: 3;
        background: var(--color-bg);
        color: var(--color-primary);
        border: var(--border);
        border-radius: var(--radius);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: var(--unit-2) var(--unit-3);
        font-size: var(--);
        font-weight: 900;
        text-align: center;
    }

    .form-success .form-status {
        border-color: green;
        color: green;
    }

    .form-fail .form-status {
        border-color: red;
        color: red;
    }

    input:not([type="submit"]), textarea {
        margin: var(--unit) 0 0;
        width: 99%;
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit) var(--unit-2);
        font-size: var(--p);
        background: var(--color-bg);
        color: var(--color-primary);
        transition: var(--transition-cubic);
        font-size: 16px;
    }

    input:not([type="submit"]):focus, textarea:focus {
        outline: none;
        box-shadow: var(--shadow);
        transition: var(--transition-cubic);
        width: 100%;
    }

    .btn {
        color: #292929;
        background: var(--color-accent);
        font-size: var(--p);
        padding: var(--unit);
        width: 100%;
        margin-top: var(--unit);
    }


</style>
