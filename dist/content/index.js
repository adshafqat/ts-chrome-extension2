var $jkxRo$opentelemetrysdktracebase = require("@opentelemetry/sdk-trace-base");
var $jkxRo$opentelemetrysdktraceweb = require("@opentelemetry/sdk-trace-web");
var $jkxRo$opentelemetryinstrumentationdocumentload = require("@opentelemetry/instrumentation-document-load");
var $jkxRo$opentelemetrycontextzone = require("@opentelemetry/context-zone");
var $jkxRo$opentelemetryinstrumentation = require("@opentelemetry/instrumentation");






window.addEventListener("load", function(request) {
    console.log("Content Script load function. This script captures browser metrics using opentelemetry and print results on console");
    const provider = new (0, $jkxRo$opentelemetrysdktraceweb.WebTracerProvider)();
    provider.addSpanProcessor(new (0, $jkxRo$opentelemetrysdktracebase.SimpleSpanProcessor)(new (0, $jkxRo$opentelemetrysdktracebase.ConsoleSpanExporter)()));
    provider.register({
        contextManager: new (0, $jkxRo$opentelemetrycontextzone.ZoneContextManager)()
    });
    // Registering instrumentations
    (0, $jkxRo$opentelemetryinstrumentation.registerInstrumentations)({
        instrumentations: [
            new (0, $jkxRo$opentelemetryinstrumentationdocumentload.DocumentLoadInstrumentation)()
        ]
    });
    console.log("Metrics are printed on browser console");
});


