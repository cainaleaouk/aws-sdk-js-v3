import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import { UnassignPrivateIpAddressesRequest } from "../models/index";
import {
  deserializeAws_ec2UnassignPrivateIpAddressesCommand,
  serializeAws_ec2UnassignPrivateIpAddressesCommand
} from "../protocols/Aws_ec2";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type UnassignPrivateIpAddressesCommandInput = UnassignPrivateIpAddressesRequest;
export type UnassignPrivateIpAddressesCommandOutput = __MetadataBearer;

export class UnassignPrivateIpAddressesCommand extends $Command<
  UnassignPrivateIpAddressesCommandInput,
  UnassignPrivateIpAddressesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnassignPrivateIpAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UnassignPrivateIpAddressesCommandInput,
    UnassignPrivateIpAddressesCommandOutput
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
    input: UnassignPrivateIpAddressesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UnassignPrivateIpAddressesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UnassignPrivateIpAddressesCommandOutput> {
    return deserializeAws_ec2UnassignPrivateIpAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}