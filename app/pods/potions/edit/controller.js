import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyPotion(formData) {
            let thisPotion = this.get('model');
            
            var prevIngredients = thisPotion.get('ingredients');
            prevIngredients.forEach(function(ingred) {
                thisPotion.get('ingredients').removeObject(ingred);
                ingred.destroyRecord();
            });
            
            thisPotion.setProperties(
                {
                    name: formData.name,
                    effect: formData.effect
                }
            );
            
            var ingTrimmed = (formData.ingredients);
            for(var i = 0; i < ingTrimmed.length; i++) {
                thisPotion.get('ingredients').createRecord({
                    name: ingTrimmed[i]
                }).save();
            }
            thisPotion.save();
            this.transitionToRoute('potions.list');
        }
    }
});
