<template>
    <input :id="id"
           :name="name"
           type="file"
           :value="value"
           :placeholder="placeholder"
           :disabled="disabled"
           :required="required"
           class="dropify"
           :class="addClass"
           @input="input($event.target.value)"
           ref="input">
</template>

<script>
    import 'dropify/dist/js/dropify'
    import 'dropify/dist/css/dropify.min.css'
    import '../../css/vue-dropify.css'

    export default {
        name: 'VueDropify',
        props: {
            id: { 'default': false },
            name: { 'default': false },
            value: { 'default': '' },
            placeholder: { 'default': 'Silahkan pilih' },

            addClass: { 'default': '' },
            multiple: { 'default': false },
            disabled: { 'default': false },
            required: { 'default': false },

            messageDefault: { 'default': 'Silahkan diisi' },
            messageDisabled: { 'default': '' },
            messageRequired: { 'default': 'Harus dipilih' },
            messageValid: { 'default': '' },
            messageReplace: { 'default': '' },
            messageRemove: { 'default': '' },
            messageError: { 'default': '' },

            errorFileSize: { 'default': '' },
            errorMinWidth: { 'default': '' },
            errorMaxWidth: { 'default': '' },
            errorMinHeight: { 'default': '' },
            errorMaxHeight: { 'default': '' },
            errorImageFormat: { 'default': '' },

            tplWrap: { 'default': '' },
            tplLoader: { 'default': '' },
            tplMessage: { 'default': '' },
            tplPreview: { 'default': '' },
            tplFilename: { 'default': '' },
            tplClearButton: { 'default': '' },
            tplErrorLine: { 'default': '' },
            tplErrorContainer: { 'default': '' },

            defaultFile: { 'default': '' },
            height: { 'default': '' },
            maxFileSize: { 'default': '' },
            minWidth: { 'default': '' },
            maxWidth: { 'default': '' },
            minHeight: { 'default': '' },
            maxHeight: { 'default': '' },
            showRemove: { 'default': 'true' },
            showLoader: { 'default': 'true' },
            showErrors: { 'default': 'true' },
            errorPosition: { 'default': 'overlay' },
            allowedFormats: { 'default': 'portrait square landscape' },
            allowedFileExtensions: { 'default': '*' },
            maxFileSizePreview: { 'default': '' },

        },
        mounted: function () {
            var _this = this;

            var options = {};
            if( _this.defaultFile !== '' ) { options.defaultFile = _this.defaultFile }
            if( _this.height !== '' ) { options.height = _this.height }
            if( _this.maxFileSize !== '' ) { options.maxFileSize = _this.maxFileSize }
            if( _this.minWidth !== '' ) { options.minWidth = _this.minWidth }
            if( _this.maxWidth !== '' ) { options.maxWidth = _this.maxWidth }
            if( _this.minHeight !== '' ) { options.minHeight = _this.minHeight }
            if( _this.maxHeight !== '' ) { options.maxHeight = _this.maxHeight }
            if( _this.showRemove !== '' ) { options.showRemove = _this.showRemove }
            if( _this.showLoader !== '' ) { options.showLoader = _this.showLoader }
            if( _this.showErrors !== '' ) { options.showErrors = _this.showErrors }
            if( _this.errorPosition !== '' ) { options.errorPosition = _this.errorPosition }
            if( _this.allowedFormats !== '' ) { options.allowedFormats = _this.allowedFormats }
            if( _this.allowedFileExtensions !== '' ) { options.allowedFileExtensions = _this.allowedFileExtensions }
            if( _this.maxFileSizePreview !== '' ) { options.maxFileSizePreview = _this.maxFileSizePreview }

            var messageOptions = {};
            var messageHasOptions = false;
            if( _this.messageDefault !== '' ) { messageOptions['default'] = _this.messageDefault; messageHasOptions = true; }
            if( _this.messageReplace !== '' ) { messageOptions['replace'] = _this.messageReplace; messageHasOptions = true; }
            if( _this.messageRemove !== '' ) { messageOptions['remove'] = _this.messageRemove; messageHasOptions = true; }
            if( _this.messageError !== '' ) { messageOptions['error'] = _this.messageError; messageHasOptions = true; }

            var errorOptions = {};
            var errorHasOptions = false;
            if( _this.errorFileSize !== '' ) { errorOptions['default'] = _this.errorFileSize; errorHasOptions = true; }
            if( _this.errorMinWidth !== '' ) { errorOptions['minWidth'] = _this.errorMinWidth; errorHasOptions = true; }
            if( _this.errorMaxWidth !== '' ) { errorOptions['maxWidth'] = _this.errorMaxWidth; errorHasOptions = true; }
            if( _this.errorMinHeight !== '' ) { errorOptions['minHeight'] = _this.errorMinHeight; errorHasOptions = true; }
            if( _this.errorMaxHeight !== '' ) { errorOptions['maxHeight'] = _this.errorMaxHeight; errorHasOptions = true; }
            if( _this.errorImageFormat !== '' ) { errorOptions['imageFormat'] = _this.errorImageFormat; errorHasOptions = true; }

            var tplOptions = {};
            var tplHasOptions = false;
            if( _this.tplWrap !== '' ) { tplOptions['wrap'] = _this.tplWrap; tplHasOptions = true; }
            if( _this.tplLoader !== '' ) { tplOptions['loader'] = _this.tplLoader; tplHasOptions = true; }
            if( _this.tplMessage !== '' ) { tplOptions['message'] = _this.tplMessage; tplHasOptions = true; }
            if( _this.tplPreview !== '' ) { tplOptions['preview'] = _this.tplPreview; tplHasOptions = true; }
            if( _this.tplFilename !== '' ) { tplOptions['filename'] = _this.tplFilename; tplHasOptions = true; }
            if( _this.tplClearButton !== '' ) { tplOptions['clearButton'] = _this.tplClearButton; tplHasOptions = true; }
            if( _this.tplErrorLine !== '' ) { tplOptions['errorLine'] = _this.tplErrorLine; tplHasOptions = true; }
            if( _this.tplErrorContainer !== '' ) { tplOptions['errorContainer'] = _this.tplErrorContainer; tplHasOptions = true; }

            if( messageHasOptions ) { options.message = messageOptions }
            if( errorHasOptions ) { options.error = errorOptions }
            if( tplHasOptions ) { options.tpl = tplOptions }

            // Init Dropify
            _this.drEvent = $(this.$el).dropify(options);

            _this.drEvent.on('dropify.fileReady', function (e) {
                _this.$emit('input:image');
            });
            _this.drEvent.on('dropify.errors', function (e) {
                _this.setValid(false);
            });
            _this.drEvent.on('change', function (e) {
                _this.setValid(true);
                _this.$emit('input', e.currentTarget.value);
                _this.$emit('input:files', e.currentTarget.files);
                _this.$emit('input:complete');
            });
        },
        data: function () {
            return {
                message: '',
                isValid: false,
                drEvent: null
            }
        },
        watch: {
            value: function (v) {
                if( v === '' ) {
                    console.log('Reset files');
                    $(this.$el).val('');
                    this.validasi();
                    this.$emit('input', '');
                    this.$emit('input:files', []);
                    this.$emit('input:complete');

                    var x = this.drEvent.data('dropify');
                    x.resetPreview();
                    x.clearElement();
                }
            },
        },
        methods: {
            input: function (v) {
                //this.validasi();
            },
            isDisabled: function () {
                return this.disabled === true || this.disabled === 'true' || this.disabled === 'disabled';
            },
            isRequired: function () {
                return this.required === true || this.required === 'true' || this.required === 'required';
            },
            isMultiple: function () {
                return this.multiple === true || this.multiple === 'true' || this.multiple === 'multiple';
            },
            validasi: function () {
                if( this.isDisabled() ) { return; }
                console.log('Valdiasi Mulai');
                var files = this.$refs.input.files;
                if( files.length === 0 ) {
                    if( this.isRequired() ) {
                        console.log('Required: false');
                        this.setValid(false);
                    } else {
                        console.log('Required: true');
                        this.setValid(true);
                    }
                } else if( files.length > 1 ) {
                    if( this.isMultiple() ) {
                        console.log('Multiple: true');
                        this.setValid(true);
                    } else {
                        console.log('Multiple: false');
                        this.setValid(false);
                    }
                } else {
                    this.setValid(true);
                }
                console.log('Valdiasi Selesai');
            },
            setValid: function (v) {
                this.isValid = v;
                this.$emit('input:validate', v);
            },
            setMessage: function (v) {
                this.message = v;
                this.$emit('input:message', v);
            }
        }
    }

</script>

<style>

</style>