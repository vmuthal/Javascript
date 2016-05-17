/**
* Following are some examples of string extention methods.
* Here we are adding new functionality to String datatype.
* This functionality will be available to the Object which is Instance of String.
*/

String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.replaceAll = function (find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
};
