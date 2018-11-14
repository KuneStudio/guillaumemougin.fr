(function($) {
    $(function() {
        $.fn.ctlogo = function(options) {
            var selector = $(this).selector; 
            var defaults = {
                'preview' : '.preview-upload',
                'text'    : '.text-upload',
                'button'  : '.button-upload',
            };
            var options  = $.extend(defaults, options);

            $(options.button).click(function() {  
                var text = $(this).siblings(options.text);
                
                tb_show('Upload a logo', 'media-upload.php?referer=ctlogo&type=image&TB_iframe=true&post_id=0', false);
        		
                window.send_to_editor = function(html) {
                    var src = $('img', html).attr('src');
                    text.attr('value', src).trigger('change'); 
                    tb_remove(); 
                }
                return false;
            });

            $(options.text).bind('change', function() {
                var url = this.value;
                var preview = $(this).siblings(options.preview);
                $(preview).attr('src', url);
            });
        }

        $('.upload').ctlogo();
    });
}(jQuery));