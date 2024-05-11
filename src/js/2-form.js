const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form > label > input");
const message = document.querySelector(".feedback-form > label > textarea");
const button = form.children[2];

form.addEventListener("input", () => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}
)

const fillInputs = () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData !== null) {
        const data = JSON.parse(savedData);
        email.value = data.email;
        message.value = data.message;
    }
};

window.addEventListener("load", fillInputs);