<template>
    <div>
        <compFeatured/>
        <compContent/>
    </div>
</template>

<script>
import compFeatured from './Featured.vue'
import compContent from './Content.vue'

export default {
    components:{
        compFeatured,
        compContent
    }
}
</script>