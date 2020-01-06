import {
  SESv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESv2Client";
import {
  ListSuppressedDestinationsRequest,
  ListSuppressedDestinationsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListSuppressedDestinationsCommand,
  serializeAws_restJson1_1ListSuppressedDestinationsCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListSuppressedDestinationsCommandInput = ListSuppressedDestinationsRequest;
export type ListSuppressedDestinationsCommandOutput = ListSuppressedDestinationsResponse;

export class ListSuppressedDestinationsCommand extends $Command<
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSuppressedDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSuppressedDestinationsCommandInput,
    ListSuppressedDestinationsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSuppressedDestinationsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListSuppressedDestinationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListSuppressedDestinationsCommandOutput> {
    return deserializeAws_restJson1_1ListSuppressedDestinationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}