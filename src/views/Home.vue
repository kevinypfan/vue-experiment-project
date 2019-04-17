<template>
  <LazyHello/>
</template>

<script>
import LoadingComponent from '@/views/LoadingComponent.vue';
import NotFound from '@/views/NotFound.vue';

var asyncComponent = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(require('@/components/HelloWorld.vue'));
        }, 2000);
    });
};

var AsyncLoad = function(asyncComponent) {
    return new Promise(function(resolve) {
        resolve({
            render: function(h, ctx) {
                return h('loading');
            },
            components: {
                loading: function() {
                    return {
                        component: asyncComponent,
                        loading: LoadingComponent
                    };
                }
            }
        });
    });
};

export default {
    props: ['qwe'],
    components: {
        LazyHello: () => AsyncLoad(asyncComponent())
    }
};
</script>
