@echo off
rem ============================================================
rem  Atalho de dois cliques: sobe o servir.mjs e abre o navegador.
rem
rem  Com Node instalado  ->  http://localhost:5173 (wakeLock ok)
rem  Sem Node            ->  abre o index.html direto (file://),
rem                          que e como o deck foi feito pra rodar.
rem
rem  Feche esta janela pra derrubar o servidor.
rem ============================================================
title fuse AIoT - apresentacao
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node nao encontrado. Abrindo o index.html direto ^(file://^)...
  start "" "%~dp0index.html"
  exit /b 0
)

echo Subindo a apresentacao em http://localhost:5173 ...
echo Feche esta janela pra derrubar o servidor.

rem abre o navegador 1s depois, dando tempo do servidor escutar a porta
start "" /min cmd /c "timeout /t 1 /nobreak >nul & start "" http://localhost:5173"

node "%~dp0servir.mjs"
