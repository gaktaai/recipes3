import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newPotion(formData) {
            var thisPotion = this.store.createRecord(
                'potion', 
                {
                    name: formData.name,
                    effect: formData.effect,
                    //ingredients: []
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
