define([
    'jquery'
], function(){
    /*
    发送删除请求并获得一个弹出确认框, 范例：

    <a href="{!! controller.destroy !!}" data-method="delete" data-confirm="Are you sure?">

    在视图中 head 区添加:

    <meta name="csrf-token" content="{!! csrf_token() !!}">

    */

    (function() {

        var laravel = {
            initialize: function() {
                this.registerEvents();
            },

            registerEvents: function() {
                $('body').on('click', 'a[data-method]', this.handleMethod);
            },

            handleMethod: function(e) {
                var link = $(this);
                var httpMethod = link.data('method').toUpperCase();
                var form;

                // If the data-method attribute is not PUT or DELETE,
                // then we don't know what to do. Just ignore.
                if ( $.inArray(httpMethod, ['PUT', 'DELETE']) === - 1 ) {
                    return;
                }

                // Allow user to optionally provide data-confirm="Are you sure?"
                if ( link.data('confirm') ) {
                    if ( ! laravel.verifyConfirm(link) ) {
                        return false;
                    }
                }

                form = laravel.createForm(link);
                form.submit();

                e.preventDefault();
            },

            verifyConfirm: function(link) {
                return confirm(link.data('confirm'));
            },

            createForm: function(link) {
                var form =
                    $('<form>', {
                        'method': 'POST',
                        'action': link.attr('href')
                    });

                var token =
                    $('<input>', {
                        'name': '_token',
                        'type': 'hidden',
                        'value': $('meta[name="csrf-token"]').attr('content')
                    });

                var hiddenInput =
                    $('<input>', {
                        'name': '_method',
                        'type': 'hidden',
                        'value': link.data('method')
                    });

                return form.append(token, hiddenInput)
                    .appendTo('body');
            }
        };

        laravel.initialize();
    })();


});
