const form = document.getElementById("contact-form");
const successState = document.getElementById("success");
const resetBtn = document.getElementById("reset-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked");
    const submitBtn = form.querySelector(".submit-btn");

    submitBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="spinner-icon"><path fill="currentColor" d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z"/></svg> Sending...`;
    submitBtn.disabled = true;

    setTimeout(() => {
        form.classList.add("hidden");
        successState.classList.remove("hidden");
    }, 5000);
});

resetBtn.addEventListener("click", () => {
    form.reset();
    form.classList.remove("hidden");
    successState.classList.add("hidden");

    const submitBtn = form.querySelector(".submit-btn");

    submitBtn.innerHTML = `<span>Send Message</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="plane-icon"><path fill="currentColor" d="M322.5 351.7L523.4 150.9L391 520.3L322.5 351.7zM489.4 117L288.6 317.8L120 249.3L489.4 117zM70.1 280.8L275.9 364.4L359.5 570.2C364.8 583.3 377.6 591.9 391.8 591.9C406.5 591.9 419.6 582.7 424.6 568.8L602.6 72C606.1 62.2 603.6 51.4 596.3 44C589 36.6 578.1 34.2 568.3 37.7L71.4 215.7C57.5 220.7 48.3 233.8 48.3 248.5C48.3 262.7 56.9 275.5 70 280.8z"/></svg>`;
    submitBtn.disabled = false;
});