# Migration `20200410134446`

This migration has been generated at 4/10/2020, 1:44:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Mark" AS ENUM ('AWAITING_CORRECTION', 'GREEN', 'MARKED', 'ORANGE', 'RED');

CREATE TABLE "public"."Contract" (
    "date" timestamp(3)  NOT NULL ,
    "id" SERIAL,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."SkillToStudent" (
    "id" SERIAL,
    "mark" "Mark" NOT NULL ,
    "skillId" integer  NOT NULL ,
    "studentId" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Skill" (
    "id" SERIAL,
    "name" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Students" (
    "firstName" text  NOT NULL ,
    "id" SERIAL,
    "lastName" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Teacher" (
    "email" text  NOT NULL ,
    "password" text  NOT NULL ,
    PRIMARY KEY ("email")
) 

ALTER TABLE "public"."SkillToStudent" ADD FOREIGN KEY ("skillId")REFERENCES "public"."Skill"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."SkillToStudent" ADD FOREIGN KEY ("studentId")REFERENCES "public"."Students"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200410134446
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,53 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+generator typegraphql {
+  provider = "node_modules/typegraphql-prisma/generator.js"
+  output   = "../prisma/generated/type-graphql"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+model Contract {
+  date DateTime
+  id   Int      @default(autoincrement()) @id
+}
+
+model SkillToStudent {
+  id        Int                       @default(autoincrement()) @id
+  mark      Mark
+  skillId   Int
+  studentId Int
+  skill    Skill                   @relation(fields: [skillId], references: [id])
+  student  Students                 @relation(fields: [studentId], references: [id])
+}
+
+model Skill {
+  id              Int               @default(autoincrement()) @id
+  name            String
+  skillToStudents SkillToStudent[]
+}
+
+model Students {
+  firstName       String
+  id              Int               @default(autoincrement()) @id
+  lastName        String
+  skillToStudents SkillToStudent[]
+}
+
+model Teacher {
+  email    String @id
+  password String
+}
+
+enum Mark {
+  AWAITING_CORRECTION
+  GREEN
+  MARKED
+  ORANGE
+  RED
+}
```


