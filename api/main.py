import os
from fastapi import FastAPI
from fastapi.openapi.docs  import (
    get_swagger_ui_html
)

from utils.dynamic_cors_middleware import DynamicCorsMiddleware
from routers import info

api_path_prefix = os.environ.get('API_PATH_PREFIX', '/api/v1')

app = FastAPI(docs_url=None, redoc_url=None)

app.add_middleware(
    DynamicCorsMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Routes 

## Rest API 
app.include_router(info.router, prefix=api_path_prefix)

## Security 

## Websockets 

## Swagger Docs 

@app.head("/docs", include_in_schema=False)
@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=f"{app.title} - Swagger UI",
    )