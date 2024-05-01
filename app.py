
from fastapi import FastAPI, Depends, Form, HTTPException, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from enum import Enum


def authenticate(username: str, password: str):
    # Replace this with your actual authentication logic
    if username == "admin" and password == "adminpass":
        return {"username": "admin", "authorization_level": AuthorizationLevel.OWNER}
    elif username == "customer" and password == "customerpass":
        return {"username": "customer", "authorization_level": AuthorizationLevel.CUSTOMER}
    else:
        return None

# Authorization levels
class AuthorizationLevel(str, Enum):
    OWNER = "owner"
    CUSTOMER = "customer"

app = FastAPI()
templates = Jinja2Templates(directory="project")

# Login route
@app.get("/", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/login")
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    user = authenticate(username, password)
    if user:
        return RedirectResponse("/dashboard", status_code=303)
    else:
        return templates.TemplateResponse("login.html", {"request": request, "message": "Invalid credentials"})

# Dashboard route
@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request, user: dict = Depends(authenticate)):
    if user["authorization_level"] == AuthorizationLevel.OWNER:
        return templates.TemplateResponse("dashboard_owner.html", {"request": request, "user": user})
    elif user["authorization_level"] == AuthorizationLevel.CUSTOMER:
        return templates.TemplateResponse("dashboard_customer.html", {"request": request, "user": user})
    else:
        raise HTTPException(status_code=403, detail="Unauthorized")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)