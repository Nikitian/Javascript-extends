jQuery.fn.extend({
    /**
     * Select item in semantic-ui/dropdown by value
     * @param {mixed} value
     * @returns {Boolean} If selected value not found in set, return false
     * @see http://semantic-ui.com/modules/dropdown.html
     * @author <mail@nikitian.ru> Nikitian
     * Example: console.log($(".ui.dropdown").dropdownSelect(somevalue));
     */
    dropdownSelect: function (value) {
        $(".menu",this).data("selectedValue", value);
        $(this).find(".menu>.item").each(function(index, el) {
            if($(el).parent().data("selectedValue") == $(el).data("value")) {
                $(this).parent().find(".item.active").removeClass("active selected");
                $(el).addClass("active selected");
                $(this).parent().parent().find("input[type='hidden']:first").val($(el).data("value"));
                $(this).parent().prev(".text").empty().append($(el).html());
            }
        });
        return ($("input[type='hidden']:first", this).val() == value);
            
    }
});