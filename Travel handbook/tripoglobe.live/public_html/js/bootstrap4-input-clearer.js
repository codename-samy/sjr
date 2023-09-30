;(function($){"use strict";var pluginName="clearer",defaults={clearHtml:'&times;</div>',cssClass:'input-clearer'};function Plugin(element,options){this.element=element;this.settings=$.extend({},defaults,options);this.init();}
$.extend(Plugin.prototype,{init:function(){var self=this;this.$element=$(this.element);this.$clearer=$('<a href="#" tabindex="-1" class="clearbtn '+this.settings.cssClass+'"><div class="">'
+this.settings.clearHtml+'</div></a>');if(this.$element.closest('div').length===0){this.$element.wrap("<div class=''></div>");}
this.$element.after(this.$clearer);this.update();this.$clearer.on('click.clearer',function(e){self.$element.val('');self.$element.focus();self.update();e.preventDefault();});this.$element.on('focus.clearer blur.clearer',function(){self.update();});this.$element.on('keyup.clearer',function(e){if(e.keyCode===27){$(this).val('').focus();}
self.update();});this.$element.on('input.clearer change.clearer paste.clearer',function(){self.update();});},update:function(){if(this.$element.val().length>=1){this.$clearer.show();}else{this.$clearer.hide();}}});$.fn[pluginName]=function(options){return this.each(function(){if(!$.data(this,"plugin_"+pluginName)){$.data(this,"plugin_"+
pluginName,new Plugin(this,options));}});};})(jQuery,window,document);