import {Enum} from 'enumify';

class Color extends Enum {}
Color.initEnum(['RED', 'GREEN', 'BLUE']);

module.exports = Color;
