/**
 * Created by ac-jlima on 4/12/16.
 */
function getNthElement(list, index) {
    if (index < 0) {
        index += list.length;
    }
    return list[index];
    
}
