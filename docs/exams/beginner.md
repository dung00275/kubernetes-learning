# Beginner Exam

**Questions:** 5  
**Pass score:** 80%

<div class="quiz" data-quiz="beginner-exam">
  <div class="quiz-question" data-answer="deployment">
    <p><strong>1.</strong> Which resource manages replicas and rolling updates?</p>
    <label><input type="radio" name="q1" value="pod"> Pod</label>
    <label><input type="radio" name="q1" value="service"> Service</label>
    <label><input type="radio" name="q1" value="deployment"> Deployment</label>
  </div>

  <div class="quiz-question" data-answer="describe">
    <p><strong>2.</strong> Which command normally provides detailed events and status for a Pod?</p>
    <label><input type="radio" name="q2" value="logs"> kubectl logs</label>
    <label><input type="radio" name="q2" value="describe"> kubectl describe pod</label>
    <label><input type="radio" name="q2" value="exec"> kubectl exec</label>
  </div>

  <div class="quiz-question" data-answer="selector">
    <p><strong>3.</strong> A Service has no endpoints. What should you compare first?</p>
    <label><input type="radio" name="q3" value="image"> Image and imagePullPolicy</label>
    <label><input type="radio" name="q3" value="selector"> Service selector and Pod labels</label>
    <label><input type="radio" name="q3" value="storage"> PVC and StorageClass</label>
  </div>

  <div class="quiz-question" data-answer="previous">
    <p><strong>4.</strong> Which option reads logs from the previous crashed container?</p>
    <label><input type="radio" name="q4" value="follow"> --follow</label>
    <label><input type="radio" name="q4" value="previous"> --previous</label>
    <label><input type="radio" name="q4" value="all"> --all-namespaces</label>
  </div>

  <div class="quiz-question" data-answer="clusterip">
    <p><strong>5.</strong> Which Service type is intended for internal cluster access by default?</p>
    <label><input type="radio" name="q5" value="nodeport"> NodePort</label>
    <label><input type="radio" name="q5" value="clusterip"> ClusterIP</label>
    <label><input type="radio" name="q5" value="externalname"> ExternalName</label>
  </div>

  <button class="quiz-submit">Submit exam</button>
  <p class="quiz-result"></p>
</div>
