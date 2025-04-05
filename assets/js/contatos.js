document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        // Captura os dados do formulário
        const formData = {
            name: document.getElementById("name").value,
            phone: document.getElementById("number").value,
            returnMethod: document.getElementById("return").value,
            message: document.getElementById("mensagem").value,
        };

        try {

            await fetch("https://residences-back.vercel.app/contatos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log('Erro de solicitação', err));

        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao enviar a mensagem. Verifique sua conexão.");
        }
    });
});