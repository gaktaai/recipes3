import Ember from 'ember';

export default Ember.Component.extend({
    validationErrors: Ember.Object.create(),
    
    actions: {
        submit() {
            if(!this.validate()) {
                return;    
            }
            var name = this.$('#name').val();
            var effect = this.$('#effect').val();
            var ingredients = this.$('#ingredients').val();
            var ingSplit = ingredients.split(',');
            var ing = [];
            for(var i = 0; i < ingSplit.length; i++) {
                var ingTrim = ingSplit[i].trim();
                ing.push(ingTrim);
            }
            this.get('onSave')({
                name: name,
                effect: effect,
                ingredients: ing//redients
            });
            
            $('.modal').modal('hide');
        },
    },
    
    validate() {
        var name = this.$('#name').val();
        var effect = this.$('#effect').val();
        var ingredients = this.$('#ingredients').val();
        
        this.set('validationErrors.name', name === '' ? 'Required' : '');
        this.set('validationErrors.effect', effect === '' ? 'Required' : '');
        this.set('validationErrors.ingredients', ingredients === '' ? 'Required, e.g.: Boomslang Skin, Bezoar, Unicorn Horn' : '');
        
        return this.get('validationErrors.name') === '' && this.get('validationErrors.effect') === '' && this.get('validationErrors.ingredients') === '';
    }
});
