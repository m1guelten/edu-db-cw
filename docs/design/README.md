# Проєктування бази даних


## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    entity Files #ffffff
    entity Files.file_id #ffffff
    entity Files.file_name #ffffff
    entity Files.admin_id #ffffff
    entity Files.branch1 #ffffff
    entity Files.branch2 #ffffff
    entity Files.original #ffffff
    entity Files.final_NER #ffffff
    entity Files.final_SEMANTIC #ffffff
    entity Files.final_INTENTION #ffffff
    
    entity markdown_NER #ffffff
    entity markdown_SEMANTIC #ffffff
    entity markdown_INTENTION #ffffff

    entity Branch #ffffff
    entity Branch.branch_id #ffffff
    entity Branch.editor_id #ffffff
    entity Branch.NER #ffffff
    entity Branch.SEMANTIC #ffffff
    entity Branch.INTENTION #ffffff

    entity User #ffffff
    entity User.user_id #ffffff
    entity User.user_name #ffffff
    entity User.user_email #ffffff
    entity User.user_psswd #ffffff
    entity User.isAdmin #ffffff
    
    entity Markdown #ffffff
    entity Markdown.markdown_id #ffffff
    entity Markdown.partials_ready #ffffff
    entity Markdown.partials_not_ready #ffffff
    entity Markdown.markdown_status #ffffff
    
    
    Files --u* Files.file_id
    Files --u* Files.file_name
    Files --u* Files.admin_id
    Files --u* Files.branch1
    Files --u* Files.branch2
    Files --u* Files.original
    Files --u* Files.final_NER
    Files --u* Files.final_SEMANTIC
    Files --u* Files.final_INTENTION
    
    User --u* User.user_id
    User --u* User.user_name
    User --u* User.user_email
    User --u* User.user_psswd
    User --u* User.isAdmin
    
    Branch --u* Branch.branch_id
    Branch --u* Branch.editor_id
    Branch --u* Branch.NER
    Branch --u* Branch.SEMANTIC
    Branch --u* Branch.INTENTION
    
    Markdown --u* Markdown.markdown_id
    Markdown --u* Markdown.partials_ready
    Markdown --u* Markdown.partials_not_ready
    Markdown --u* Markdown.markdown_status
    
    Markdown --> markdown_NER
    Markdown --> markdown_SENTIMENT
    Markdown --> markdown_INTENTION
    
    
    
    Files "*"--"1" User
    Files "1"--u*"2" Branch
    Branch "1"--u*"3" Markdown
    Branch "*"--"1" User
        
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

