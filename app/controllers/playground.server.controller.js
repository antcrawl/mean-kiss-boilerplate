'use strict';

/**
 * Module dependencies.
 */

exports.index = function(req, res) {
	res.render('playground', {
		user: req.user || null,
		page: 'playground'
	});
};


// render MODEL - called when ref model is explored and has to be rendered in the tree
// params - node clicked - model or id
/*
* find model by id
* split id into array
*init children = {}
 * find folders in folder by parent id == root or folder._id
 * success handler - children.folders = folders
 * then find models in model by parent id == root or
 *  success handler - children.models = models
 *  resp.jsonp(children)
 *
 * */


/*
exports.getReferenceModel(req, res, node, model){

    Models.find({id : model._id}, function(err,models){
        if(!err) {
            var str_array = (req.body.id).split(':');
            var parentId = "root";

            for (var i = 0; i < str_array.length; i++) {
                str_array[i] = str_array[i].replace(/^\s*//*
, "").replace(/\s*$/, "");
            }
        }
    });
}
*/
