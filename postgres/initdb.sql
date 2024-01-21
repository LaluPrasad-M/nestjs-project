ALTER SCHEMA public RENAME TO nestjs_app;
ALTER DATABASE nestjs_app SET search_path TO nestjs_app,public;
ALTER SYSTEM SET wal_level TO 'logical';
SELECT pg_reload_conf();