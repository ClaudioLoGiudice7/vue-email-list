const app = Vue.createApp({
    data() {
        return {
            casualEmails: [],
        };
    },


    methods: {
        getEmails() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        if (this.casualEmails.length < 10) {
                            this.casualEmails.push(response.data.response);
                        }
                    });
            }
        },
    },
})
app.mount("#root");