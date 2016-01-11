import DS from 'ember-data';

const potion = DS.Model.extend({
  name: DS.attr('string'),
  effect: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', { async: true }, { inverse: 'potion' }) //DS.attr('string')
});

/*
potion.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Cure for Boils',
            effect: 'Cures most of the boils caused by common potions.',
            ingredients: 'Porcupine Quills, Snake Fangs, Horned Slugs'
        },    
        {
            id: 2,
            name: 'Polyjuice Potion',
            effect: 'Changes your appearance to look like someone else.',
            ingredients: 'Fluxweed, Knotgrass, Lacewing Flies, Leeches, Horn of Bicorn, Boomslang Skin, Piece of person you are turning into'
        }  
    ]
});
*/

export default potion;