import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
window.addEventListener("load", function(request){        console.log('Content Script load function. This script captures browser metrics using opentelemetry and print results on console');

    const provider = new WebTracerProvider();
    provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

    provider.register({
      contextManager: new ZoneContextManager(),
    });

   // Registering instrumentations
   registerInstrumentations({
    instrumentations: [
     new DocumentLoadInstrumentation(),
    ],
   });

  console.log("Metrics are printed on browser console");


});

