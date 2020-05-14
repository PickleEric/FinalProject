<template>
    <div>
         <div class="alert alert-danger" v-show="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div class="card add-student m-2 p-2">
                <h4 class="card-title">Please enter all information below.</h4>

                <div class="form-group">
                    <label for="firstname">Firstname: </label>
                    <input id="firstname" class="form-control" v-model.trim="newFirstname">
                </div>
                <div class="form-group">
                    <label for="lastname">Lastname: </label>
                    <input id="lastname" class="form-control" v-model.trim="newLastname">
                </div>
                <div class="form-group">
                    <label for="phonenumber">Phone Number </label>
                    <input id="phonenumber" class="form-control" v-model.trim="newPhoneNumber">
                </div>
                <div class="form-group">
                    <label for="questions">Questions? </label>
                    <textarea id="questions" class="form-control" v-model.trim="newQuestion"/>
                </div>

                <button class="btn btn-primary" v-on:click="addClient">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarEvent',
    data() {
        return {
            newFirstname: '',
            newLastname: '',
            newPhoneNumber: '',
            newQuestion: '',
            errors: []
        }
    },
    methods: {
        addClient() {
            this.errors = []
            if (this.newFirstname && this.newLastname && this.newPhoneNumber && this.newQuestion) {
                let client = { 
                                Firstname: this.newFirstname, 
                                Lastname: this.newLastname, 
                                PhoneNumber: this.newPhoneNumber,
                                Question: this.newQuestion, 
                                present: false 
                                }
                this.$emit('client-added', client)
                this.newFirstname = ''
                this.newLastname = ''
                this.newPhoneNumber = ''
                this.newQuestion = ''
            } else {
                this.errors.push('Please enter all the fields')
            }
        }
    }
}
</script>

<style scoped>

</style>