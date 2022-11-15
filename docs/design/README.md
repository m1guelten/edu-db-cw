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
    
    entity File
    entity File.AdminName #ffffff
    entity File.Title #ffffff
    entity File.Categories #ffffff
    entity File.CreationDate #ffffff
    
    entity File.EditorsList
    
    entity EditingAccessRequest

    entity Admin

    entity User
    entity User.Name #ffffff
    entity User.Password #ffffff
    entity User.Email #ffffff
    entity User.AuthorizationToken #ffffff
    
    File --u-* "3,3" Markdown
    
    Markdown.MarkdownSentiment <-- Markdown
    Markdown.MarkdownNER <-- Markdown
    Markdown.MarkdownSemantic <-- Markdown
    
    File "0,*" -- "1,1" Admin
    File  -- File.EditorsList
    
    File.AdminName "1,1" *-u-- "1,1" File
    File.Title "1,1" *-u-- "1,1" File
    File.Categories "1,*" *-u-- "1,*" File
    File.CreationDate "1,1" *-u-- "0,*" File
    
    EditingAccessRequest  *-u-- "0,*" User
    
    EditingAccessRequest -- Admin : "1,1"
    
    Admin  <--  User
    
    User.Name "1,1" *-u-- User
    User.Password "1,1" *-u-- User
    User.Email "1,1" *-u-- User
    User.AuthorizationToken "1,1" *-u--  User

@enduml

</center>
- ER-модель
- реляційна схема

