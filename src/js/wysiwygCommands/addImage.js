/**
 * @fileoverview Implements AddImage wysiwyg command
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */

'use strict';

var WysiwygCommand = require('../wysiwygCommand');

/**
 * AddImage
 * Add Image markdown syntax to wysiwyg Editor
 * @exports AddImage
 * @augments Command
 * @augments WysiwygCommand
 */
var AddImage = WysiwygCommand.factory(/** @lends AddImage */{
    name: 'AddImage',
    /**
     *  커맨드 핸들러
     *  @param {Squire} editor Squire instance
     *  @param {object} data data for image
     */
    exec: function(editor, data) {
        editor.insertImage(data.imageUrl);
        editor.focus();
    }
});


module.exports = AddImage;
