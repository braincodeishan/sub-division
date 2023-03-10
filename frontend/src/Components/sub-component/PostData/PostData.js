import React from 'react'

const PostData = () => {
    return (
        <div>
            <form action="http://localhost:3001/gdsCsv" method="post" enctype="multipart/form-data">
                <input type="file" name="csv" />
                <div class="text-center"><button type="submit" class="btn btn-lg btn-primary">submit</button></div>
            </form>

        </div>
    )
}

export default PostData