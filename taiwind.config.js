// tailwind.config.js
module.exports = {
    theme: {
        container: {
            center: true, // always center
            padding: '1rem', // default padding
            screens: {
                sm: "100%",
                md: "100%",
                lg: "960px",
                xl: "1200px",
                "2xl": "1760px",
            },
        },
        extend: {
            fontFamily: {
                heading: ["var(--font-heading)"],
                body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],

            },
            colors: {
                // topbarBgLight: '#FF2A41', // Hellmodus
                // topbarBgDark: '#1F2937',  // Dunkelmodus
            },
            fontSize: {
                xs: ["12px", "16px"],
                sm: ["14px", "20px"],
                base: ["16px", "24px"],
                h1: ["48px", {lineHeight: "56px", fontWeight: "700"}],
                h2: ["36px", "44px"],
                h3: ["24px", "32px"],
            },
            spacing: {
                18: "18px",
                22: "22px",
                56: "56px",
            },
            borderRadius: {
                xl: "20px",
                '2xl': "28px",
            },
            boxShadow: {
                card: "0 8px 24px rgba(0,0,0,0.08)",
            },
        },
    },


};
