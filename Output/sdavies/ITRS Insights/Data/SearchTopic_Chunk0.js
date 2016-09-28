define({"0":{i:0.0154833159717332,u:"../Content/A_Quick Start/Getting Started with ITRS Insights.htm",a:"Getting Started with ITRS Insights Welcome to ITRS Insights.  Insights is a streaming big data analytics platform that simplifies the analysis of vast amounts of data at speed. It combines big data storage with a real-time computation engine and in-built machine learning and algorithms. Insights ...",t:"Getting Started with Insights"},"1":{i:0.00836932952336281,u:"../Content/A_Quick Start/Whats New in ITRS Insights.htm",a:"What\u0027s New in ITRS Insights v1.4 Put Insights WN here...",t:"What\u0027s New in ITRS Insights v1.4"},"2":{i:0.0178252894125784,u:"../Content/C_User Guides/Installation \u0026 Licensing User Guide.htm",a:"Install and Set-up To utilize Insights, you need an installation of both the Valo platform\n(a single node or a cluster) and also the Insights application. Install Valo If your administrator has already installed Valo, you\ncan jump to  Install Insights Requirements Operating System: Ubuntu Server ...",t:"Installation \u0026 Licensing User Guide"},"3":{i:0.0218774557609314,u:"../Content/C_User Guides/Organizing Data User Guide.htm",a:"Introduction To help you get the most from Insights, it\u0027s important to understand a little about the organizational concepts that underpin it.  Because Insights\u0027 query tool acts like a pipeline - you can build successive queries to be applied to one set of results in order to iteratively pare down ...",t:"Organizing Data in  ITRS Insights"},"4":{i:0.065508370055977,u:"../Content/C_User Guides/Data Streams \u0026 Schema User Guide.htm",a:"Intro text as;fsdpfjsd;   Choose a Repository Before you import a data stream into Insights, you must choose which type of repository it will be stored in. Insights stores data in two different repositories: The Semi-Structured Repository (SSR) The Time Series Repository (TSR) First, you have to ...",t:"ITRS Insights Data Streams \u0026 Schema User Guide"},"5":{i:0.0130183381235883,u:"../Content/C_User Guides/Domain \u0026 Contributors User Guide.htm",a:"  What are Domains? Domain: two or more contributors grouped together by a common attribute. Domains help to organize and group different data sources in intuitive ways.  See also:   Contributor . Example Domain In our street of smart metered houses, we could define\nhouse Number 6 as a domain, thus ...",t:"ITRS Insights Domain \u0026 Contributors User Guide"},"6":{i:0.0173119470494188,u:"../Content/C_User Guides/Query, Search \u0026 Transform Data User Guide.htm",a:"ITRS Insights provides you with two powerful tools for analyzing and searching your data: Free text: a string search for historical data stored in semi-structured repositories (SSR)  Query : a powerful SQL-like query used for historical and streaming data stored in any repository type (SSR or time ...",t:"ITRS Insights Query, Search and Transform Data User Guide"},"7":{i:0.092225563532052,u:"../Content/C_User Guides/Dashboard \u0026 Notebook User Guide.htm",a:"  Notebooks An Insights notebook is very similar to the paper notebook on your\ndesk, it is a place where you can record your findings, try hypothesis,\njot notes and build up understanding. You can run searches and queries\nfrom your notebook, review results in a number of different graphing\noptions ...",t:"ITRS Insights Dashboard \u0026 Notebook User Guide"},"8":{i:0.0143016293647504,u:"../Content/C_User Guides/Visualizing Results User Guide.htm",a:"ITRS Insights provides a number of different ways to visualize your data\nand the outcome of your queries and analysis. Once you have run the\nquery the relevant chart options are displayed at the top to choose\nfrom. Tables  The most simple, and default, manner of displaying query results is a\ntable ...",t:"ITRS Insights Visualizing Results User Guide"},"9":{i:0.0557890627443305,u:"../Content/C_User Guides/Geneos Integration User Guide.htm",a:"ITRS Insights Integration Guide for Geneos Users The Geneos transport can connect to a Geneos Gateway with publisher support. Prerequisites Valo-Geneos integration requires a GA3.3.0 Gateway or newer running on 64 bit Linux. This can be downloaded from the  ITRS Group website . If you are running ...",t:"Integrate With ITRS Geneos"},"10":{i:0.00836932952336281,u:"../Content/C_User Guides/Logstash User Guide.htm",a:"Background In this example we will use Logstash to parse an Apache HTTP Server log file and feed it into Valo for analysis. Walkthrough Download and unpack Logstash. Download the latest version of  Logstash , and unzip it. We will refer to the folder you unzip it to as your \"Logstash folder\". If you ...",t:"Logstash walkthough"},"11":{i:0.0640510612545398,u:"../Content/B_Technical Reference/Repositories/Repositories - TSR \u0026 SSR.htm",a:"Before you import a data stream into Insights, you must choose which type of repository it will be stored in. Insights stores data in two different repositories: The Semi-Structured Repository (SSR) The Time Series Repository (TSR) Choosing which is best for you depends largely on what kind of ...",t:"Repositories - TSR \u0026 SSR"},"12":{i:0.0140174543066916,u:"../Content/B_Technical Reference/Algorithms/Anomaly.htm",a:"Identification of events which do not conform to the pattern set by\nother events in a dataset. This is done using the SAX (Symbolic Aggregate ApproXimation) method\ndescribed in greater detail in the paper  \"Assumption-Free Anomaly\nDetection in Time\nSeries\" . Using this\nmethod the time series is ...",t:"Anomaly"},"13":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Algorithms/Bivar.htm",a:"Bivariate correlative statistics for use with 2 variables. Format bivar(x:Double,  y:Double) Outputs covariance = a measure of how much 2 random variables x \u0026 y change\ntogether pearsonsR = the correlation coefficient = a measure of the\nstrength and direction of the linear relationship between ...",t:"Bivar"},"14":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Algorithms/Histogram.htm",a:"Online Histogram creation that updates on every single new fact learnt\nand it can be computed / aggregated in parallel. Bins will be\nautomatically adjusted. Based on the following paper: \"A Streaming Parallel Decision Tree\nAlgorithm\" .\nYael Ben-Haim and Elad Tom-Tov, IBM Haifa Research Lab. Format:  ...",t:"Histogram"},"15":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Algorithms/Irregular Time Series Functions.htm",a:"Time Series is categorised as regular, when the data points come on a\nregular time based frequency (the spacing of \"observations\" is constant)\nor irregular when the data point frequency is not regular (the spacing\nof \"observations\" is uneven). For example share trading data may be collected every ...",t:"Irregular Time Series Functions"},"16":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Algorithms/Quantiles.htm",a:"Quantiles Format: quantiles(maxBins, ARRAY{Quantiles}) (value:double) Parameters:",t:"Quantiles"},"17":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Algorithms/Univar.htm",a:"Descriptive statistics over a numerical stream of values. Format: Univar(value:double) Output Example: Implementation based on: \"Formulas for robust, one-pass parallel computation of covariances and\narbitrary-order statistical\nmoments\" \n- P. Pebay. Sandia Report SAND2008-6212, Sandia National ...",t:"Univar"},"18":{i:0.0435977714651214,u:"../Content/B_Technical Reference/Geneos Integration/Configuration.htm",a:"Configuration To enable the transport: \n    {\n        \"valo.transport.transports.geneos\": \"com.itrsgroup.transport.geneos.GeneosTransportFactory\"\n    }\n Settings All settings are prefixed valo.transport.geneos",t:"Configuration"},"19":{i:0.0207222637380852,u:"../Content/B_Technical Reference/Geneos Integration/Gateways.htm",a:"Valo can connect to one or more publishing Gateways. In application.conf, valo.transport.geneos.gateways is an array of Gateway nanomsg connections the node should connect to. Each gateway has the following settings: To connect to a single gateway publishing to nanomsg using the default ports: \n    ...",t:"Gateways"},"20":{i:0.0207222637380852,u:"../Content/B_Technical Reference/Geneos Integration/Kafkas.htm",a:"Valo can also connect to one or more Apache Kafka brokers to whom the Gateway might publish data. In application.conf, valo.transport.geneos.kafkas is an array of Kafka connections the node should connect to. Each kafka broker connection has the following settings: To connect to a Kakfa broker using ...",t:"Kafka Brokers"},"21":{i:0.00836932952336281,u:"../Content/B_Technical Reference/Geneos Integration/Limitations.htm",a:"Geneos Flexibility vs Well defined Valo Data Valo has a well typed system, every stream defines a schema that the data must conform to. Geneos defines tables of data which loosly conform to types, but are largely published as Strings. These differences can make it difficult to map Geneos Data to ...",t:"Limitations and Workarounds"},"22":{i:0.0154833159717332,u:"../Content/B_Technical Reference/Geneos Integration/Monitoring.htm",a:"You can diagnose the Geneos integration by using the REST end point for monitoring. \n.. http:get:: /monitoring/:tenant/geneos\n        Gets the current Geneos state, which includes:\n                * Gateway connection state, payload counts\n                * Stream status, payload count and payload ...",t:"Geneos Monitoring"},"23":{i:0.00836932952336281,u:"../Content/B_Technical Reference/Geneos Integration/Requirements.htm",a:"Valo-Geneos Integration Requirements Valo-Geneos integration requires a GA3.3.0 Gateway or newer running on 64 bit Linux. This can be downloaded from the  ITRS Group website . If you are running Valo on Windows,  Visual C++ Redistributable for Visual Studio 2015  is required.",t:"Requirements"},"24":{i:0.0207222637380852,u:"../Content/B_Technical Reference/Geneos Integration/Streams.htm",a:"Valo publishes data from Geneos Gateways by subscribing to topics that correspond to dataviews and other Gateway data. In application.conf, valo.transport.geneos.streams is an array of Stream definitions. Each stream has the following settings: The following creates a stream publishing all updates ...",t:"Streams and Dataviews"},"25":{i:0.0417575249982992,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/aggregation.htm",a:"An aggregation is a  Select  clause where all fields are\neither values in a group or values produced by an aggregator function. Form \nFROM HISTORICAL \u003cstream_name\u003e\n[,\u003cquery\u003e]?\nSELECT \u003c, group field | aggregator function\u003e\n For example: \nFROM HISTORICAL {{book.cpu}}\nSELECT avg(user) AS user, ...",t:"Aggregation"},"26":{i:0.0134221301408352,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/As.htm",a:"As The as clause is a way of applying an alias to an output field. Form: \n\u003cquery\u003e AS \u003cname\u003e\n Example: \nFROM {{book.cpu}} WHERE user \u003e 50 AS cpu_data\n",t:"As"},"27":{i:0.0091868465211829,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Comment.htm",a:"Comment A comment allows descriptive text to be added to a query. Form: \n--[free form text]\n Examples: \n-- This is a comment!\nFROM {{book.cpu}} TAKE 10\nSELECT user\n\nFROM {{book.cpu}} TAKE 10 -- This is also a comment!\nSELECT user\n",t:"Comment"},"28":{i:0.0091868465211829,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/from.htm",a:"from The from clause is used to specify which stream will be used as the\ninitial source for data in the query. \nFROM \u003cstream_name\u003e\n Every query starts with a from followed by the entity that you are\nquerying; so for example \nfrom /streams/hce/electricity/usage\n or \nfrom {{book.cpu}}\n If you are ...",t:"FROM"},"29":{i:0.0269340742918558,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/GroupBy.htm",a:"The group by clause is used to group results into distinct buckets. A\ngroup by *is always* followed by an\n Aggregation . Form: \nGROUP BY \u003c,field\u003e\n[WINDOW]?\nSELECT \u003c,group field|aggregator function\u003e\n The aggregation clause follows the rules in  Historical Aggregation  and  Realtime Aggregation . At ...",t:"Group By"},"30":{i:0.0169957312875125,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Into.htm",a:"Into The into clause gives a name to a part of the query or the whole\nquery itself. This name can be used in a  Join  statement or to refer to\nthe query from another in the same execution session. Form: \nINTO \u003cname\u003e\n Example: \nFROM {{book.cpu}}\n    WHERE user \u003e 50\n    INTO result\n",t:"Into"},"31":{i:0.0236333522522923,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Join.htm",a:"Joins two streams. The stream to join to can be specified inline or another query in the\nsame session can be referenced by name. Form: \n\u003cquery\u003e [INTO \u003cname\u003e]?\nINNER JOIN \u003cname|query\u003e ON \u003cpredicate\u003e\n *Note:*The use of what may appear at the moment to be a\nsuperfluous INNER operator is deliberate ...",t:"Join"},"32":{i:0.0091868465211829,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/OrderBy.htm",a:"The order by clause is used to order results in ascending or descending\norder. Form: For a historical query the syntax is defined as \nFROM HISTORICAL \u003cstream name\u003e\n[query]?\nORDER BY \u003c,field [DESCENDING|ASCENDING]?\u003e\n For a realtime query the syntax is defined as \nFROM \u003cstream name\u003e\n[TAKE ...",t:"Order By"},"33":{i:0.0168982220688455,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Query Functions.htm",a:"Query Functions Insights provides you with a significant number of functions out of the\nbox. These functions can be used within a query\nto perform complex mathematical and analytical operations on your data.\nSee  ITRS Insights Query, Search and Transform Data User Guide . The complete list is: abs: ...",t:"Analysing Data"},"34":{i:0.00836932952336281,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Query Operators.htm",a:"When processing query expressions, Insights uses the table below to\ndetermine the order of operations. Using the table: Operators with a lower precedence are evaluated before operators with\na higher precedence. Operators with the same precedence are evaluated in order of\nappearance in the query ...",t:"Query Operators and Their Precedence"},"35":{i:0.0269340742918558,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/select.htm",a:"The select clause is used to specify which fields should appear in the\nresults, the fields separated by commas. Fields in a select clause can\nbe field identifiers, scalar functions, or values computed with\noperators. Form: \nSELECT \u003cfield\u003e    or    SELECT \u003cfield1, field2, ...\u003e\n Examples: \nFROM ...",t:"Select"},"36":{i:0.0227676430001397,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/take.htm",a:"Limits the number of results returned by a query. FORM: \n\u003cquery\u003e TAKE 100\n Examples: \nFROM {{book.cpu}}\nTAKE 100\n or \nFROM {{book.cpu}}\nGROUP BY host\nSELECT host, avg(user) as user\nTAKE 100\n Will take the first 100 results returned in either case. Note: We intentionally have not included a “SKIP” ...",t:"Take"},"37":{i:0.0227676430001397,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/TimeWindow.htm",a:"The time window clause creates a moving window over a specified time\nduration. A time window is always followed by an\n Aggregation , possibly with a further grouping\nclause. Time windows cannot be nested. There is an additional syntax which does not require the time field to\nbe specified. This ...",t:"Time Window"},"38":{i:0.00836932952336281,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Union.htm",a:"Union The union clause combines the result from two select clauses. Form: \nSELECT \u003c,field\u003e\nUNION [ALL]?\nSELECT \u003c,field\u003e\n Examples: \nFROM {{book.cpu}}\nSELECT host\nUNION\nFROM mem\nSELECT host\n",t:"Union"},"39":{i:0.0091868465211829,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/Unique.htm",a:"Unique The unique clause prevents duplicate rows from appearing in the results. Form: \nSELECT UNIQUE \u003c,field\u003e\n Examples: \nFROM cpu\nSELECT UNIQUE host\nFROM cpu\nSELECT UNIQUE host, day(timestamp) as day\n",t:"Unique"},"40":{i:0.0188632006169749,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/where.htm",a:"The where clause is used to return only rows that match a specified\ncondition. Field identifiers, scalar functions, or operators can be used\nin a where clause. Form WHERE \u003cpredicate\u003e\n             Examples \nFROM {{book.cpu}} WHERE user \u003e 50\nFROM HISTORICAL {{book.cpu}} WHERE max(user, kernel) \u003e ...",t:"Where"},"41":{i:0.00836932952336281,u:"../Content/B_Technical Reference/Query Syntax \u0026 Operators/WindowJoin.htm",a:"Joins two streams over a time window. Form: \n\u003cquery\u003e WINDOW OF \u003cduration\u003e [ON \u003cfield\u003e [INTO \u003cname\u003e]?\n[INNER|LEFT|RIGHT|FULL] JOIN \u003cname|query\u003e ON \u003cpredicate\u003e\n Examples: \nfrom {{book.cpu}}\n    where user \u003e 50\n    window of 3 seconds into c\n    inner join mem\n        on c.host == mem.host\n\nfrom ...",t:"Window Join"},"42":{i:0.0612381571385341,u:"../Content/B_Technical Reference/Schema Fields \u0026 Types/field_identifiers_and_formats.htm",a:"Field identifiers Valid field identifiers must: Start with a character. Not contain spaces. Only contain alpha numeric characters and underscores. Reserved Names The following names are reserved and cannot be used as field identifiers\nor in function signatures. ...",t:"Field Identifiers and Formats"},"43":{i:0.0102494630163974,u:"../Content/F_INTERFACE/ITRS Insights Interface.htm",a:"ITRS Insights Interface Delete this text and replace it with your own content.",t:"ITRS Insights Interface"},"44":{i:0.00836932952336281,u:"../Content/D_FAQs/FAQs.htm",a:"FAQs Here is some general text for a topic. Replace this with your own content.",t:"FAQs"},"45":{i:0.00836932952336281,u:"../Content/Home.htm",a:"ITRS Insights Product Documentation User Guides, Technical Reference, FAQs and More... What\u0027s New in ITRS Insights v1.4 dfgfdg dgdfg dfgfd dfgdf dfgdfg dfgdf Where Do I Begin? PDF User Guides",t:"ITRS Insights Product Documentation"},"46":{i:0.00996528795833857,u:"../Content/B_Technical Reference/Schema Fields \u0026 Types/Schema Types.htm",a:"Schemas: Define the structure of a stream ​ Every stream needs a schema, which describes the ‘shape’ of the data being streamed through Valo. Let’s dig into an example with our air pollution stream’s schema: {\n  \"schema\": {\n    \"topDef\": {\n      \"type\": \"record\",\n      \"properties\":\n        \"area\": ...",t:"Schema Types"},"47":{i:0.0130183381235883,u:"../Content/C_User Guides/Template User Guide.htm",a:"ITRS Insights Template User Guide Delete this text and replace it with your own content.",t:"ITRS Insights Template User Guide"},});