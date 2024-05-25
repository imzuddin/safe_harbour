from fastapi.middleware.cors import CORSMiddleware

default_cors_list = set(["http://localhost:3000", "http://localhost:3001"])

class DynamicCorsMiddleware(CORSMiddleware):
    def is_origin_allowed(self, origin: str) -> bool:
        if self.allow_all_origins:
            return True 
        if origin in default_cors_list:
            return True 
        return False
