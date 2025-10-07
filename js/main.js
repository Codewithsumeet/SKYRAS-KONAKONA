// ---------- MAIN JAVASCRIPT FOR KONA KONA WEBSITE ---------- //
document.addEventListener('DOMContentLoaded', function () {

    // ----------------- NAVIGATION (Smooth Scroll) ----------------- //
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ----------------- ANIMATE CARDS ON SCROLL ----------------- //
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.challenge-card, .tier-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // ----------------- FILE UPLOAD AREA ----------------- //
    document.getElementById('room-photos-upload')?.addEventListener('click', () => console.log('Room photo upload clicked'));
    document.getElementById('floor-plan-upload')?.addEventListener('click', () => console.log('Floor plan upload clicked'));

    // ----------------- CONTINUE BUTTON (Webhook Only) ----------------- //
    const continueButton = document.getElementById("continue-button");
    const WEBHOOK_URL = "https://sumeetwagh.app.n8n.cloud/webhook-test/750b15b5-b588-4f19-8fc2-7a05a1d00768";

    continueButton?.addEventListener("click", async () => {
        // Gather any data you want from the page
        const nameInput = document.getElementById("inputName"); // optional
        const payload = {
            name: nameInput ? nameInput.value.trim() : "Anonymous",
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            console.log(await response.text());
            alert("Data submitted!");
        } catch (error) {
            console.error("Error sending to webhook:", error);
            alert("Failed to submit data");
        }
    });

    // ----------------- LOAD TALLY EMBED ----------------- //
    if (typeof Tally !== 'undefined' && Tally.loadEmbeds) Tally.loadEmbeds();

});
