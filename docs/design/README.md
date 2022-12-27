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
    
    entity FILE <<ENTITY>> {
    file_id
    file_name
    admin_id
    branch1
    branch2
    original
    final_NER
    final_SEMANTIC 
    final_INTENTION
    }

    entity USER <<ENTITY>>{
    user_id
    user_name
    user_email
    user_psswd
    isAdmin
    }

    entity BRANCH <<ENTITY>> {
    Branch.branch_id
    editor_id
    NER
    SEMANTIC
    INTENTION
    }
    
    entity MARKDOWN <<ENTITY>> {
    Markdown.markdown_id
    partials_ready
    partials_not_ready
    markdown_status
    }
    
    entity MARKDOWN_NER <<ENTITY>>
    entity MARKDOWN_SEMANTIC <<ENTITY>>
    entity MARKDOWN_INTENTION <<ENTITY>>
    
    USER -- FILE
    FILE -- BRANCH
    BRANCH -- MARKDOWN
    MARKDOWN_NER <-- MARKDOWN
    MARKDOWN_SEMANTIC <-- MARKDOWN
    MARKDOWN_INTENTION <-- MARKDOWN



@enduml

</center>>

- ER-модель
- реляційна схема

