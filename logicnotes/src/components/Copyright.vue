<script setup>

</script>

<template>
    <main>
        <section>
            <h1>
                © 2024 LogicNotes. All rights reserved.
            </h1>
            <p>
                The content, design, and structure of this website are protected by copyright law and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of LogicNotes or in the case of third-party materials, the owner of that content.
            </p>
            <p>
                The content on LogicNotes is provided for educational and informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
                You may not alter or remove any trademark, copyright, or other notice from copies of the content. However, you may download and print a reasonable number of copies of the materials for your personal, non-commercial use.
            </p>
            <p>
                You may not use any automated tools, such as bots or scrapers, to access or collect information from this website without our express written consent.
            </p>
        </section>
    </main>
</template>

<style scoped>
    main 
    {
        width:100vw;
        height:92.5vh;
        background-color:var(--theme1);
        font-family: 'Rubik', sans-serif;
        color:var(--color);
    }
    section 
    {
        position:relative;
        top:5vh;
        left:30vw;
        width:40vw;
        height:80vh;
        background-color:var(--theme2);
    }
    h1 
    {
        padding-top:30px;
        padding-left:30px;
        padding-right:30px;
        text-align:center;
    }
    p 
    {
        padding-top:30px;
        padding-left:30px;
        padding-right:30px;
        text-align:justify;
    }
    @media screen and (max-width:600px)
    {
        main 
        {
            height:160vh;
        }
        section 
        {
            left:4vw;
            width:90vw;
            height:150vh;
        }
    }
</style>
