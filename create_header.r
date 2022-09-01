add_header <- function(dir_path) {
  dir_files <- list.files(dir_path)
  for (file_name in dir_files) {
    str_vector = c(file_name)
    if (length(grep('.+\\.html$', str_vector))) {
      path = paste(dir_path, "/", file_name, sep="")
      file_contents = readChar(path, file.info(path)$size)
      new_contents = sub('<nav role="navigation">',
                         '<nav role="navigation">
        <a href="https://efp.ucsb.edu/" class="img-logo-link">
          <img src="EFP_Logo.png" class="img-logo" />
        </a>
        <style>
          .img-logo-link {
            padding: 5px 0;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .img-logo {
            height: 40px;
            object-fit: contain;
        }
        ul.summary {
            top: 50px !important;
        }
        </style>
        ',
                         file_contents)
      file_conn = file(path)
      writeLines(c(new_contents), file_conn)
      close(file_conn)
    }
  }
}
#add_header("./_book")
add_header('./Book/b079430abca8e34647c00bf9657bef86d5425932')
add_header('./CIP')
add_header('./Update')