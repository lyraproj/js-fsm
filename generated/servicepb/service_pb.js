/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var datapb_data_pb = require('../datapb/data_pb.js');
goog.exportSymbol('proto.puppet.service.EmptyRequest', null, global);
goog.exportSymbol('proto.puppet.service.InvokeRequest', null, global);
goog.exportSymbol('proto.puppet.service.MetadataResponse', null, global);
goog.exportSymbol('proto.puppet.service.StateRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.puppet.service.MetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.puppet.service.MetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.puppet.service.MetadataResponse.displayName = 'proto.puppet.service.MetadataResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.puppet.service.MetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.puppet.service.MetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.puppet.service.MetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.MetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeset: (f = msg.getTypeset()) && datapb_data_pb.Data.toObject(includeInstance, f),
    definitions: (f = msg.getDefinitions()) && datapb_data_pb.Data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.puppet.service.MetadataResponse}
 */
proto.puppet.service.MetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.puppet.service.MetadataResponse;
  return proto.puppet.service.MetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.puppet.service.MetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.puppet.service.MetadataResponse}
 */
proto.puppet.service.MetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new datapb_data_pb.Data;
      reader.readMessage(value,datapb_data_pb.Data.deserializeBinaryFromReader);
      msg.setTypeset(value);
      break;
    case 2:
      var value = new datapb_data_pb.Data;
      reader.readMessage(value,datapb_data_pb.Data.deserializeBinaryFromReader);
      msg.setDefinitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.puppet.service.MetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.puppet.service.MetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.puppet.service.MetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.MetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      datapb_data_pb.Data.serializeBinaryToWriter
    );
  }
  f = message.getDefinitions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      datapb_data_pb.Data.serializeBinaryToWriter
    );
  }
};


/**
 * optional puppet.datapb.Data typeset = 1;
 * @return {?proto.puppet.datapb.Data}
 */
proto.puppet.service.MetadataResponse.prototype.getTypeset = function() {
  return /** @type{?proto.puppet.datapb.Data} */ (
    jspb.Message.getWrapperField(this, datapb_data_pb.Data, 1));
};


/** @param {?proto.puppet.datapb.Data|undefined} value */
proto.puppet.service.MetadataResponse.prototype.setTypeset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.puppet.service.MetadataResponse.prototype.clearTypeset = function() {
  this.setTypeset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.puppet.service.MetadataResponse.prototype.hasTypeset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional puppet.datapb.Data definitions = 2;
 * @return {?proto.puppet.datapb.Data}
 */
proto.puppet.service.MetadataResponse.prototype.getDefinitions = function() {
  return /** @type{?proto.puppet.datapb.Data} */ (
    jspb.Message.getWrapperField(this, datapb_data_pb.Data, 2));
};


/** @param {?proto.puppet.datapb.Data|undefined} value */
proto.puppet.service.MetadataResponse.prototype.setDefinitions = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.puppet.service.MetadataResponse.prototype.clearDefinitions = function() {
  this.setDefinitions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.puppet.service.MetadataResponse.prototype.hasDefinitions = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.puppet.service.InvokeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.puppet.service.InvokeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.puppet.service.InvokeRequest.displayName = 'proto.puppet.service.InvokeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.puppet.service.InvokeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.puppet.service.InvokeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.puppet.service.InvokeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.InvokeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    method: jspb.Message.getFieldWithDefault(msg, 2, ""),
    arguments: (f = msg.getArguments()) && datapb_data_pb.Data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.puppet.service.InvokeRequest}
 */
proto.puppet.service.InvokeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.puppet.service.InvokeRequest;
  return proto.puppet.service.InvokeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.puppet.service.InvokeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.puppet.service.InvokeRequest}
 */
proto.puppet.service.InvokeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 3:
      var value = new datapb_data_pb.Data;
      reader.readMessage(value,datapb_data_pb.Data.deserializeBinaryFromReader);
      msg.setArguments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.puppet.service.InvokeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.puppet.service.InvokeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.puppet.service.InvokeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.InvokeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArguments();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      datapb_data_pb.Data.serializeBinaryToWriter
    );
  }
};


/**
 * optional string identifier = 1;
 * @return {string}
 */
proto.puppet.service.InvokeRequest.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.puppet.service.InvokeRequest.prototype.setIdentifier = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string method = 2;
 * @return {string}
 */
proto.puppet.service.InvokeRequest.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.puppet.service.InvokeRequest.prototype.setMethod = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional puppet.datapb.Data arguments = 3;
 * @return {?proto.puppet.datapb.Data}
 */
proto.puppet.service.InvokeRequest.prototype.getArguments = function() {
  return /** @type{?proto.puppet.datapb.Data} */ (
    jspb.Message.getWrapperField(this, datapb_data_pb.Data, 3));
};


/** @param {?proto.puppet.datapb.Data|undefined} value */
proto.puppet.service.InvokeRequest.prototype.setArguments = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.puppet.service.InvokeRequest.prototype.clearArguments = function() {
  this.setArguments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.puppet.service.InvokeRequest.prototype.hasArguments = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.puppet.service.EmptyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.puppet.service.EmptyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.puppet.service.EmptyRequest.displayName = 'proto.puppet.service.EmptyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.puppet.service.EmptyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.puppet.service.EmptyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.puppet.service.EmptyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.EmptyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.puppet.service.EmptyRequest}
 */
proto.puppet.service.EmptyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.puppet.service.EmptyRequest;
  return proto.puppet.service.EmptyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.puppet.service.EmptyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.puppet.service.EmptyRequest}
 */
proto.puppet.service.EmptyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.puppet.service.EmptyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.puppet.service.EmptyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.puppet.service.EmptyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.EmptyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.puppet.service.StateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.puppet.service.StateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.puppet.service.StateRequest.displayName = 'proto.puppet.service.StateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.puppet.service.StateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.puppet.service.StateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.puppet.service.StateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.StateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    input: (f = msg.getInput()) && datapb_data_pb.Data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.puppet.service.StateRequest}
 */
proto.puppet.service.StateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.puppet.service.StateRequest;
  return proto.puppet.service.StateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.puppet.service.StateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.puppet.service.StateRequest}
 */
proto.puppet.service.StateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new datapb_data_pb.Data;
      reader.readMessage(value,datapb_data_pb.Data.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.puppet.service.StateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.puppet.service.StateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.puppet.service.StateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.puppet.service.StateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      datapb_data_pb.Data.serializeBinaryToWriter
    );
  }
};


/**
 * optional string identifier = 1;
 * @return {string}
 */
proto.puppet.service.StateRequest.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.puppet.service.StateRequest.prototype.setIdentifier = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional puppet.datapb.Data input = 2;
 * @return {?proto.puppet.datapb.Data}
 */
proto.puppet.service.StateRequest.prototype.getInput = function() {
  return /** @type{?proto.puppet.datapb.Data} */ (
    jspb.Message.getWrapperField(this, datapb_data_pb.Data, 2));
};


/** @param {?proto.puppet.datapb.Data|undefined} value */
proto.puppet.service.StateRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.puppet.service.StateRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.puppet.service.StateRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.puppet.service);