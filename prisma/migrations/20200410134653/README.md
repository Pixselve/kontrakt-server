# Migration `20200410134653`

This migration has been generated at 4/10/2020, 1:46:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Skill" ADD COLUMN "contractId" integer  NOT NULL ;

ALTER TABLE "public"."Skill" ADD FOREIGN KEY ("contractId")REFERENCES "public"."Contract"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200410134446..20200410134653
--- datamodel.dml
+++ datamodel.dml
@@ -8,14 +8,15 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model Contract {
   date DateTime
   id   Int      @default(autoincrement()) @id
+  skills Skill[]
 }
 model SkillToStudent {
   id        Int                       @default(autoincrement()) @id
@@ -29,8 +30,10 @@
 model Skill {
   id              Int               @default(autoincrement()) @id
   name            String
   skillToStudents SkillToStudent[]
+  contract Contract @relation(fields: [contractId], references: [id])
+  contractId Int
 }
 model Students {
   firstName       String
```


