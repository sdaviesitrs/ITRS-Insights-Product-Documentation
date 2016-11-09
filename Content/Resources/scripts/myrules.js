var ValoHighlightRules = function() {

    var keywords = (
        "from|historical|join|inner|on|order|by|ascending|descending|into|take|select|unique|emit|every|values|value|create|set|" +
        "where|in|sliding|tumbling|group|window|of|"
    );

    var builtinConstants = (
        "true|false|null"
    );

    var builtinFunctions = (
        "isNull|length|concat|prefix|contains|toUpper|toLower|toRadians|toDegrees|tanh|tan|sqrt|sinh|" +
        "sin|pow|log1p|log10|log|hypot|floor|expm1|exp|cosh|cos|ceil|cbrt|atan2|atan|asin|acos|min|max|abs|" +
        "ifNull|toByte|toShort|toInt|toLong|isPosInfinity|isNegInfinity|isInfinity|isNan|toDouble|ordinal|diff|" +
        "plus|minus|weekOfYear|weekOfMonth|isAfter|isBefore|dayOfYear|dayOfWeekValue|dayOfWeek|day|lengthOfMonth|" +
        "month|nameOfMonth|isLeapYear|lengthOfYear|year|utcTomorrow|utcYesterday|utcDate|toDateTime|date|startOfSecond|" +
        "startOfMinute|startOfHour|format|secondOfDay|minuteOfDay|nano|second|minute|hour|toTime|toDate|utcNow|datetime|" +
        "time|version|variant|toString|uuid|nanos|micros|millis|seconds|minutes|hours|days|duration|getFragment|getQuery|"+
        "getPath|getPort|getHost|getUserInfo|getAuthority|isOpaque|isAbsolute|getScheme|uri|I|toBool|isSiteMulticastAddress|" +
        "isOrganisationMulticastAddress|isNodeLocalMulticastAddress|isLinkLocalMulticastAddress|isGlobalMulticastAddress|" +
        "isIPv4Mapped|isMulticastAddress|multicastKind|kind|isIPv4|isIPv6|isLoopbackAddress|inetAddressByName|inetAddress|" +
        "contributor|relate|boundingBox|radiusKM|radiusDEG|centerLatitude|centerLongitude|geoCircle|pointOnBearing|distance|"+
        "distanceDEG|latitude|longitude|geoPoint|crossesDateLine|center|height|width|geoRectangle|search|domain|email|hasTag|notTagged|isTagged|Erfc|Erf|"
    );

    var dataTypes = (
        "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|" +
        "money|real|number|integer"
    );

    var keywordMapper = highlight.createKeywordMapper({
        "built-in-function": builtinFunctions,
        "keyword": keywords,
        "built-in-constant": builtinConstants,
        "data-type": dataTypes
    }, "identifier", true);

    return {
        "start" : [ {
            token : "comment",
            regex : "--.*$"
        },  {
            token : "comment",
            start : "/\\*",
            end : "\\*/"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "string",           // ' string
            regex : "'.*?'"
        }, {
            token : "constant-numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword-operator",
            regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
    // this.normalizeRules();
};

highlight.it(ValoHighlightRules())({auto:'pre'});
