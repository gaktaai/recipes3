import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deletePotion(thisPotion) {
            
            var prevIngredients = thisPotion.get('ingredients');
            prevIngredients.forEach(function(ingred) {
                thisPotion.get('ingredients').removeObject(ingred);
                ingred.destroyRecord();
            });
            
            thisPotion.destroyRecord();
        }
    }
    
});
