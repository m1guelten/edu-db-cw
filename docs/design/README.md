# Проєктування бази даних


## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    entity Markdown
    entity Markdown.MarkdownSentiment #ffffff
    entity Markdown.MarkdownNER #ffffff
    entity Markdown.MarkdownSemantic #ffffff
    entity Markdown.ReadinessStatus #ffffff
    entity Markdown.Type #ffffff
    entity Branch #ffffff

    entity File
    entity File.AdminName #ffffff
    entity File.Title #ffffff
    entity File.Categories #ffffff
    entity File.CreationDate #ffffff
    
    entity File.EditorsList
    
    entity EditingAccessRequest
    
    entity Admin
    
        entity Editor
    entity Editor.PullRequest #ffffff
        
    entity FileSearchRequest.CategoryFilter #ffffff
    entity FileSearchRequest.FileNameFilter #ffffff
    
    entity User
    entity User.Name #ffffff
    entity User.Password #ffffff
    entity User.Email #ffffff
    entity User.AuthorizationToken #ffffff
    
    entity Commit
    entity Commit.Comment #ffffff
    entity Commit.Date #ffffff
    entity Commit.MarkdownContent #ffffff
    
    File --u-* "3,3" Markdown
    
    Markdown.MarkdownSentiment <-- Markdown
    Markdown.MarkdownNER <-- Markdown
    Markdown.MarkdownSemantic <-- Markdown
    Markdown.Type "1,1" *-u-- Markdown
    Markdown.ReadinessStatus "1,1" *-u-- Markdown
    Branch "1,1" *-u-- Markdown
    
    File "0,*" -- "1,1" Admin
    File  -- File.EditorsList
    
    File.AdminName "1,1" *-u-- "1,1" File
    File.Title "1,1" *-u-- "1,1" File
    File.Categories "1,*" *-u-- "1,*" File
    File.CreationDate "1,1" *-u-- "0,*" File
    
    Editor "1,1" -- "1,1" Branch
    Editor "0,2" -- "1,1" File.EditorList
    Commit "1,*" -- "1,1" Markdown
    
    EditingAccessRequest  *-u-- "0,*" User
    
    EditingAccessRequest -- Admin : "1,1"
    
    Admin  <--  User
    Editor  <--  User
    FileSearchRequest "1,1"  --  User
    User.Name "1,1" *-u-- User
    User.Password "1,1" *-u-- User
    User.Email "1,1" *-u-- User
    User.AuthorizationToken "1,1" *-u--  User
    
    Editor.PullRequest "0,*" *-u-- Editor
    FileSearchRequest.CategoryFilter "1,*" *-u-- FileSearchRequest
    FileSearchRequest.FileNameFilter "0,1" *-u-- FileSearchRequest
    
    
    Commit.Comment "1,1" *-u-- Commit
    Commit.Date "1,1" *-u-- Commit
    Commit.MarkdownContent "1,1" *-u-- Commit
    
@enduml

</center>

## ER - модель

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
    
    entity Markdown <<ENTITY>> {
    Type
    Branch
    ReadinessStatus
    }
    entity Markdown.MarkdownSentiment <<ENTITY>> {
    MarkdownSentiment
    }
    entity Markdown.MarkdownNER <<ENTITY>> {
    MarkdownNER
    }
    entity Markdown.MarkdownSemantic <<ENTITY>> {
    MarkdownSemantic
    }
    entity File <<ENTITY>> {
    AdminName
    Title
    Categories
    CreationDate
    EditorsList
    Markdown
    }
    entity Admin <<ENTITY>> {
    }
    entity Commit <<ENTITY>> {
    Date
    MarkdownContent
    Comment
    }
    entity Editor <<ENTITY>> {
    PullRequest
    }
    entity User <<ENTITY>> {
    Name
    Password
    Email
    AuthorizationToken
    EditingAccessRequest
    }
    entity FileSearchRequest <<ENTITY>> {
    FileNameFilter
    CategoryFilter
    }

    Markdown -- Commit
    Markdown --> Markdown.MarkdownSentiment
    Markdown --> Markdown.MarkdownNER
    Markdown --> Markdown.MarkdownSemantic
    
    File -- Markdown
    File -- Admin
    
    Admin -- EditingAccessRequest
    
    User --> Admin
    User --> Editor
    User -- FileSearchRequest
    
    Editor -- EditorList
    Editor -- Branch



@enduml

</center>>

- ER-модель
- реляційна схема

