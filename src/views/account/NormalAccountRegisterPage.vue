<template lang="">
    <div>
        <normal-account-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import NormalAccountRegisterForm from '@/components/account/NormalAccountRegisterForm.vue';
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
    components: {
        NormalAccountRegisterForm
    },
    methods: {
        ...mapActions(accountModule, ['requestNormalRegisterAccountToSpring']),
        async onSubmit (payload) {
            const {email, password, roleType} = payload
            await this.requestNormalRegisterAccountToSpring(
                {email, password, roleType})
        }
    }
}
</script>

<style lang="">
    
</style>