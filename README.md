# Informator

Udostępnianie treści (teksty, zdjęcia) przez API dla blogów i portfolio + panel edycji.

- `backend/` – .NET 10, kontrolery, Clean Architecture (Domain / Application / Infrastructure / Api)
- `frontend/` – panel admina: React 19 + Vite + TS + Tailwind v4 + TanStack
- `docker-compose.yml` – PostgreSQL, Redis, MinIO

## Start
```bash
docker compose up -d
cd backend && dotnet run --project src/Informator.Api   # http://localhost:5080/scalar
cd frontend && npm install && npm run dev               # http://localhost:5173
```
