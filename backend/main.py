from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ReportRequest(BaseModel):
    name: str

@app.post("/create-report/")
def create_report(request: ReportRequest):
    return {"message": f"Report for {request.name} has been created successfully."}

@app.post("/call-lead/")
def call_lead(request: ReportRequest):
    return {"message": f"Calling lead for {request.name}..."}
