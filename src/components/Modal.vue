<template>
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                <div class="modal-header">
                    <slot name="header-titulo" class="modal-title"></slot>
                    
                    <button type="button" class="close" @click="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            $(this.$el).modal('show');
        },
        close() {
            $(this.$el).modal('hide');
        }
    }
}
</script>

