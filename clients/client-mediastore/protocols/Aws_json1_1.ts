import {
  CreateContainerCommandInput,
  CreateContainerCommandOutput
} from "../commands/CreateContainerCommand";
import {
  DeleteContainerCommandInput,
  DeleteContainerCommandOutput
} from "../commands/DeleteContainerCommand";
import {
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput
} from "../commands/DeleteContainerPolicyCommand";
import {
  DeleteCorsPolicyCommandInput,
  DeleteCorsPolicyCommandOutput
} from "../commands/DeleteCorsPolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput
} from "../commands/DescribeContainerCommand";
import {
  GetContainerPolicyCommandInput,
  GetContainerPolicyCommandOutput
} from "../commands/GetContainerPolicyCommand";
import {
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput
} from "../commands/GetCorsPolicyCommand";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "../commands/GetLifecyclePolicyCommand";
import {
  ListContainersCommandInput,
  ListContainersCommandOutput
} from "../commands/ListContainersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutContainerPolicyCommandInput,
  PutContainerPolicyCommandOutput
} from "../commands/PutContainerPolicyCommand";
import {
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput
} from "../commands/PutCorsPolicyCommand";
import {
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput
} from "../commands/PutLifecyclePolicyCommand";
import {
  StartAccessLoggingCommandInput,
  StartAccessLoggingCommandOutput
} from "../commands/StartAccessLoggingCommand";
import {
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput
} from "../commands/StopAccessLoggingCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  Container,
  ContainerInUseException,
  ContainerNotFoundException,
  CorsPolicyNotFoundException,
  CorsRule,
  CreateContainerInput,
  CreateContainerOutput,
  DeleteContainerInput,
  DeleteContainerOutput,
  DeleteContainerPolicyInput,
  DeleteContainerPolicyOutput,
  DeleteCorsPolicyInput,
  DeleteCorsPolicyOutput,
  DeleteLifecyclePolicyInput,
  DeleteLifecyclePolicyOutput,
  DescribeContainerInput,
  DescribeContainerOutput,
  GetContainerPolicyInput,
  GetContainerPolicyOutput,
  GetCorsPolicyInput,
  GetCorsPolicyOutput,
  GetLifecyclePolicyInput,
  GetLifecyclePolicyOutput,
  InternalServerError,
  LimitExceededException,
  ListContainersInput,
  ListContainersOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  MethodName,
  PolicyNotFoundException,
  PutContainerPolicyInput,
  PutContainerPolicyOutput,
  PutCorsPolicyInput,
  PutCorsPolicyOutput,
  PutLifecyclePolicyInput,
  PutLifecyclePolicyOutput,
  StartAccessLoggingInput,
  StartAccessLoggingOutput,
  StopAccessLoggingInput,
  StopAccessLoggingOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateContainerCommand(
  input: CreateContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.CreateContainer";
  let body: any = {};
  const wrappedBody: any = {
    CreateContainerInput: serializeAws_json1_1CreateContainerInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateContainer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteContainerCommand(
  input: DeleteContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.DeleteContainer";
  let body: any = {};
  const wrappedBody: any = {
    DeleteContainerInput: serializeAws_json1_1DeleteContainerInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteContainer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteContainerPolicyCommand(
  input: DeleteContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.DeleteContainerPolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteContainerPolicyInput: serializeAws_json1_1DeleteContainerPolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteContainerPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteCorsPolicyCommand(
  input: DeleteCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.DeleteCorsPolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteCorsPolicyInput: serializeAws_json1_1DeleteCorsPolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCorsPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteLifecyclePolicyCommand(
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.DeleteLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteLifecyclePolicyInput: serializeAws_json1_1DeleteLifecyclePolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeContainerCommand(
  input: DescribeContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.DescribeContainer";
  let body: any = {};
  const wrappedBody: any = {
    DescribeContainerInput: serializeAws_json1_1DescribeContainerInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeContainer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetContainerPolicyCommand(
  input: GetContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.GetContainerPolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetContainerPolicyInput: serializeAws_json1_1GetContainerPolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetContainerPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCorsPolicyCommand(
  input: GetCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.GetCorsPolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetCorsPolicyInput: serializeAws_json1_1GetCorsPolicyInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCorsPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLifecyclePolicyCommand(
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.GetLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetLifecyclePolicyInput: serializeAws_json1_1GetLifecyclePolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListContainersCommand(
  input: ListContainersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.ListContainers";
  let body: any = {};
  const wrappedBody: any = {
    ListContainersInput: serializeAws_json1_1ListContainersInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListContainers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceInput: serializeAws_json1_1ListTagsForResourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutContainerPolicyCommand(
  input: PutContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.PutContainerPolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutContainerPolicyInput: serializeAws_json1_1PutContainerPolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutContainerPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutCorsPolicyCommand(
  input: PutCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.PutCorsPolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutCorsPolicyInput: serializeAws_json1_1PutCorsPolicyInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutCorsPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutLifecyclePolicyCommand(
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.PutLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutLifecyclePolicyInput: serializeAws_json1_1PutLifecyclePolicyInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartAccessLoggingCommand(
  input: StartAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.StartAccessLogging";
  let body: any = {};
  const wrappedBody: any = {
    StartAccessLoggingInput: serializeAws_json1_1StartAccessLoggingInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartAccessLogging",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopAccessLoggingCommand(
  input: StopAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.StopAccessLogging";
  let body: any = {};
  const wrappedBody: any = {
    StopAccessLoggingInput: serializeAws_json1_1StopAccessLoggingInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopAccessLogging",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceInput: serializeAws_json1_1TagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MediaStore_20170901.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceInput: serializeAws_json1_1UntagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateContainerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContainerOutput(
    data.CreateContainerOutput,
    context
  );
  const response: CreateContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateContainerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateContainerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.mediastore#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteContainerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerOutput(
    data.DeleteContainerOutput,
    context
  );
  const response: DeleteContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteContainerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteContainerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteContainerPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteContainerPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerPolicyOutput(
    data.DeleteContainerPolicyOutput,
    context
  );
  const response: DeleteContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteContainerPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteContainerPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteCorsPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCorsPolicyOutput(
    data.DeleteCorsPolicyOutput,
    context
  );
  const response: DeleteCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCorsPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCorsPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      response = await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLifecyclePolicyOutput(
    data.DeleteLifecyclePolicyOutput,
    context
  );
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecyclePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeContainerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContainerOutput(
    data.DescribeContainerOutput,
    context
  );
  const response: DescribeContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContainerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeContainerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetContainerPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetContainerPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerPolicyOutput(
    data.GetContainerPolicyOutput,
    context
  );
  const response: GetContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContainerPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetContainerPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCorsPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCorsPolicyOutput(
    data.GetCorsPolicyOutput,
    context
  );
  const response: GetCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCorsPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCorsPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      response = await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyOutput(
    data.GetLifecyclePolicyOutput,
    context
  );
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListContainersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListContainersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContainersOutput(
    data.ListContainersOutput,
    context
  );
  const response: ListContainersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListContainersOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListContainersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(
    data.ListTagsForResourceOutput,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutContainerPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutContainerPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutContainerPolicyOutput(
    data.PutContainerPolicyOutput,
    context
  );
  const response: PutContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutContainerPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutContainerPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutCorsPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutCorsPolicyOutput(
    data.PutCorsPolicyOutput,
    context
  );
  const response: PutCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutCorsPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutCorsPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecyclePolicyOutput(
    data.PutLifecyclePolicyOutput,
    context
  );
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLifecyclePolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartAccessLoggingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartAccessLoggingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAccessLoggingOutput(
    data.StartAccessLoggingOutput,
    context
  );
  const response: StartAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartAccessLoggingOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartAccessLoggingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopAccessLoggingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopAccessLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopAccessLoggingOutput(
    data.StopAccessLoggingOutput,
    context
  );
  const response: StopAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopAccessLoggingOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopAccessLoggingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(
    data.TagResourceOutput,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(
    data.UntagResourceOutput,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = await deserializeAws_json1_1ContainerInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = await deserializeAws_json1_1ContainerNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediastore#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1ContainerInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ContainerInUseException> => {
  const deserialized: any = deserializeAws_json1_1ContainerInUseException(
    output.body,
    context
  );
  const contents: ContainerInUseException = {
    __type: "ContainerInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ContainerNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ContainerNotFoundException(
    output.body,
    context
  );
  const contents: ContainerNotFoundException = {
    __type: "ContainerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CorsPolicyNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1CorsPolicyNotFoundException(
    output.body,
    context
  );
  const contents: CorsPolicyNotFoundException = {
    __type: "CorsPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    output.body,
    context
  );
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1PolicyNotFoundException(
    output.body,
    context
  );
  const contents: PolicyNotFoundException = {
    __type: "PolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AllowedHeaders = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1AllowedMethods = (
  input: Array<MethodName | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1AllowedOrigins = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CorsPolicy = (
  input: Array<CorsRule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1CorsRule(entry, context)
  );
};

const serializeAws_json1_1CorsRule = (
  input: CorsRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AllowedHeaders !== undefined) {
    bodyParams["AllowedHeaders"] = serializeAws_json1_1AllowedHeaders(
      input.AllowedHeaders,
      context
    );
  }
  if (input.AllowedMethods !== undefined) {
    bodyParams["AllowedMethods"] = serializeAws_json1_1AllowedMethods(
      input.AllowedMethods,
      context
    );
  }
  if (input.AllowedOrigins !== undefined) {
    bodyParams["AllowedOrigins"] = serializeAws_json1_1AllowedOrigins(
      input.AllowedOrigins,
      context
    );
  }
  if (input.ExposeHeaders !== undefined) {
    bodyParams["ExposeHeaders"] = serializeAws_json1_1ExposeHeaders(
      input.ExposeHeaders,
      context
    );
  }
  if (input.MaxAgeSeconds !== undefined) {
    bodyParams["MaxAgeSeconds"] = input.MaxAgeSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateContainerInput = (
  input: CreateContainerInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteContainerInput = (
  input: DeleteContainerInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteContainerPolicyInput = (
  input: DeleteContainerPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCorsPolicyInput = (
  input: DeleteCorsPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLifecyclePolicyInput = (
  input: DeleteLifecyclePolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeContainerInput = (
  input: DescribeContainerInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1ExposeHeaders = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetContainerPolicyInput = (
  input: GetContainerPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCorsPolicyInput = (
  input: GetCorsPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLifecyclePolicyInput = (
  input: GetLifecyclePolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListContainersInput = (
  input: ListContainersInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Resource !== undefined) {
    bodyParams["Resource"] = input.Resource;
  }
  return bodyParams;
};

const serializeAws_json1_1PutContainerPolicyInput = (
  input: PutContainerPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  return bodyParams;
};

const serializeAws_json1_1PutCorsPolicyInput = (
  input: PutCorsPolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  if (input.CorsPolicy !== undefined) {
    bodyParams["CorsPolicy"] = serializeAws_json1_1CorsPolicy(
      input.CorsPolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutLifecyclePolicyInput = (
  input: PutLifecyclePolicyInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  if (input.LifecyclePolicy !== undefined) {
    bodyParams["LifecyclePolicy"] = input.LifecyclePolicy;
  }
  return bodyParams;
};

const serializeAws_json1_1StartAccessLoggingInput = (
  input: StartAccessLoggingInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1StopAccessLoggingInput = (
  input: StopAccessLoggingInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContainerName !== undefined) {
    bodyParams["ContainerName"] = input.ContainerName;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Resource !== undefined) {
    bodyParams["Resource"] = input.Resource;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Resource !== undefined) {
    bodyParams["Resource"] = input.Resource;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AllowedHeaders = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AllowedMethods = (
  output: any,
  context: __SerdeContext
): Array<MethodName | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AllowedOrigins = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Container = (
  output: any,
  context: __SerdeContext
): Container => {
  let contents: any = {
    __type: "Container",
    ARN: undefined,
    AccessLoggingEnabled: undefined,
    CreationTime: undefined,
    Endpoint: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.ARN !== undefined) {
    contents.ARN = output.ARN;
  }
  if (output.AccessLoggingEnabled !== undefined) {
    contents.AccessLoggingEnabled = output.AccessLoggingEnabled;
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.Endpoint !== undefined) {
    contents.Endpoint = output.Endpoint;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1ContainerInUseException = (
  output: any,
  context: __SerdeContext
): ContainerInUseException => {
  let contents: any = {
    __type: "ContainerInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ContainerList = (
  output: any,
  context: __SerdeContext
): Array<Container> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Container(entry, context)
  );
};

const deserializeAws_json1_1ContainerNotFoundException = (
  output: any,
  context: __SerdeContext
): ContainerNotFoundException => {
  let contents: any = {
    __type: "ContainerNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CorsPolicy = (
  output: any,
  context: __SerdeContext
): Array<CorsRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CorsRule(entry, context)
  );
};

const deserializeAws_json1_1CorsPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): CorsPolicyNotFoundException => {
  let contents: any = {
    __type: "CorsPolicyNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CorsRule = (
  output: any,
  context: __SerdeContext
): CorsRule => {
  let contents: any = {
    __type: "CorsRule",
    AllowedHeaders: undefined,
    AllowedMethods: undefined,
    AllowedOrigins: undefined,
    ExposeHeaders: undefined,
    MaxAgeSeconds: undefined
  };
  if (output.AllowedHeaders !== undefined) {
    contents.AllowedHeaders = deserializeAws_json1_1AllowedHeaders(
      output.AllowedHeaders,
      context
    );
  }
  if (output.AllowedMethods !== undefined) {
    contents.AllowedMethods = deserializeAws_json1_1AllowedMethods(
      output.AllowedMethods,
      context
    );
  }
  if (output.AllowedOrigins !== undefined) {
    contents.AllowedOrigins = deserializeAws_json1_1AllowedOrigins(
      output.AllowedOrigins,
      context
    );
  }
  if (output.ExposeHeaders !== undefined) {
    contents.ExposeHeaders = deserializeAws_json1_1ExposeHeaders(
      output.ExposeHeaders,
      context
    );
  }
  if (output.MaxAgeSeconds !== undefined) {
    contents.MaxAgeSeconds = output.MaxAgeSeconds;
  }
  return contents;
};

const deserializeAws_json1_1CreateContainerOutput = (
  output: any,
  context: __SerdeContext
): CreateContainerOutput => {
  let contents: any = {
    __type: "CreateContainerOutput",
    Container: undefined
  };
  if (output.Container !== undefined) {
    contents.Container = deserializeAws_json1_1Container(
      output.Container,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteContainerOutput = (
  output: any,
  context: __SerdeContext
): DeleteContainerOutput => {
  let contents: any = {
    __type: "DeleteContainerOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeleteContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteContainerPolicyOutput => {
  let contents: any = {
    __type: "DeleteContainerPolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeleteCorsPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteCorsPolicyOutput => {
  let contents: any = {
    __type: "DeleteCorsPolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeleteLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyOutput => {
  let contents: any = {
    __type: "DeleteLifecyclePolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1DescribeContainerOutput = (
  output: any,
  context: __SerdeContext
): DescribeContainerOutput => {
  let contents: any = {
    __type: "DescribeContainerOutput",
    Container: undefined
  };
  if (output.Container !== undefined) {
    contents.Container = deserializeAws_json1_1Container(
      output.Container,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ExposeHeaders = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GetContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetContainerPolicyOutput => {
  let contents: any = {
    __type: "GetContainerPolicyOutput",
    Policy: undefined
  };
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_json1_1GetCorsPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetCorsPolicyOutput => {
  let contents: any = {
    __type: "GetCorsPolicyOutput",
    CorsPolicy: undefined
  };
  if (output.CorsPolicy !== undefined) {
    contents.CorsPolicy = deserializeAws_json1_1CorsPolicy(
      output.CorsPolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyOutput => {
  let contents: any = {
    __type: "GetLifecyclePolicyOutput",
    LifecyclePolicy: undefined
  };
  if (output.LifecyclePolicy !== undefined) {
    contents.LifecyclePolicy = output.LifecyclePolicy;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListContainersOutput = (
  output: any,
  context: __SerdeContext
): ListContainersOutput => {
  let contents: any = {
    __type: "ListContainersOutput",
    Containers: undefined,
    NextToken: undefined
  };
  if (output.Containers !== undefined) {
    contents.Containers = deserializeAws_json1_1ContainerList(
      output.Containers,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    Tags: undefined
  };
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1PolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyNotFoundException => {
  let contents: any = {
    __type: "PolicyNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PutContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutContainerPolicyOutput => {
  let contents: any = {
    __type: "PutContainerPolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1PutCorsPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutCorsPolicyOutput => {
  let contents: any = {
    __type: "PutCorsPolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1PutLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyOutput => {
  let contents: any = {
    __type: "PutLifecyclePolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1StartAccessLoggingOutput = (
  output: any,
  context: __SerdeContext
): StartAccessLoggingOutput => {
  let contents: any = {
    __type: "StartAccessLoggingOutput"
  };
  return contents;
};

const deserializeAws_json1_1StopAccessLoggingOutput = (
  output: any,
  context: __SerdeContext
): StopAccessLoggingOutput => {
  let contents: any = {
    __type: "StopAccessLoggingOutput"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};